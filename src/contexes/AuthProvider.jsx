import { useReducer } from 'react'
import AuthContext from './AuthContext'

function handleUpdate(user, update) {
  if (!user)
    return null

  return {
    ...user,
    ...update
  }
}

function reducer(prev, { type, payload }) {
  switch (type) {
    case 'login':
      return {
        email: payload.email,
        fullName: payload.fullName
      }

    case 'logout':
      return null

    case 'update':
      return handleUpdate(prev, payload)

    default:
      return prev;
  }
}

function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, null)

  return (
    <AuthContext.Provider value={[user, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider