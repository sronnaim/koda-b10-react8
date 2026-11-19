import { useReducer } from 'react'
import authContext from './authContext'

const ACTIONS = {
  'logout': () => null,
  'login': (_, { username, email, firstName }) => ({ username, email, firstName }),
  'update': (prev, update) => prev ? { ...prev, ...update } : prev
}

function reducer(prev, { action, payload }) {
  const handler = ACTIONS[action]
  return handler ? handler(prev, payload) : prev
}

function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, null)

  return (
    <authContext.Provider value={[user, dispatch]}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider