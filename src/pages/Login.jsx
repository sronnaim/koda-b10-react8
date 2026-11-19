import { useContext, useEffect } from 'react'
import { LuLock, LuUser } from 'react-icons/lu'
import { NavLink, useNavigate } from 'react-router'
import authContext from '../contexes/Auth/authContext'
import { usersContext } from '../contexes/Users/usersContext'

function authenticate(username, password, users) {
  const foundUser = users.find(user => user.username === username)

  if (!foundUser)
    return null

  if (foundUser.password !== password)
    return null

  return { username, email: foundUser.email, firstName: foundUser.firstName }
}

function Login() {
  const [user, dispatchUser] = useContext(authContext)
  const [users] = useContext(usersContext)

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const authenticatedUser = authenticate(fd.get('username'), fd.get('password'), users)

    if (!authenticatedUser)
      return window.alert('Invalid credentials')

    dispatchUser({ action: 'login', payload: authenticatedUser })
    console.log(authenticatedUser)

    navigate('/')
  }

  useEffect(() => {
    if (user)
      navigate('/')
  }, [user, navigate])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="mx-auto p-4 rounded-2xl *:text-center bg-surface shadow-sm shadow-black/30 text-sm">
        <h1 className='font-semibold text-xl'>Sign in with Email</h1>
        <p className='text-sm'>Make a new doc to bring your team together</p>
        <form onSubmit={handleLogin} className='flex flex-col gap-4 mt-4 max-w-[50%'>
          <label>
            <span className="sr-only">Username</span>
            <span className="bg-surface-container flex gap-2 items-center p-2 rounded-xl">
              <LuUser />
              <input type="text" name="username" autoComplete='email' className="w-full" />
            </span>
          </label>
          <label>
            <span className="sr-only">Password</span>
            <span className="bg-surface-container flex gap-2 items-center p-2 rounded-xl">
              <LuLock />
              <input type="password" name="password" autoComplete='current-password' className="w-full" />
            </span>
          </label>
          <div>
            <button type='submit' className='w-fit px-4 py-2 text-sm bg-primary text-on-primary rounded-xl shadow-sm shadow-black/30 font-semibold'>
              Get Started
            </button>
          </div>
        </form>
      </div>
      <NavLink to={'/'} className="text-xs py-2">To Homepage, probably couldn't while logged out</NavLink>
    </main>
  )
}

export default Login