import { useEffect, useReducer } from "react"
import { usersContext } from "./usersContext"

const URL = '/users.json'

const ACTIONS = {
  'seed': handleSeed,
  'update': handleUpdate
}

function handleSeed(_, seed) {
  return seed
}

function handleUpdate(users, { username, update }) {
  const found = users.find(user => user.username === username)

  if (!found)
    return users;

  return users.map(user => {
    if (user.username !== username)
      return user

    return {
      ...user,
      ...update
    }
  })
}

function reducer(prev, { action, payload }) {
  const handler = ACTIONS[action]
  return handler ? handler(prev, payload) : prev
}

function UsersProvider({ children }) {
  const [users, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(URL)
        const { users } = await res.json()
        dispatch({ action: 'seed', payload: users })
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  return (
    <usersContext.Provider value={[users, dispatch]}>
      {children}
    </usersContext.Provider>
  )
}

export default UsersProvider