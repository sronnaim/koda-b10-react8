import { useContext, useEffect } from "react"
import AuthContext from "../contexes/AuthContext"
import { NavLink, useNavigate } from 'react-router'

function Home() {
  const [user, dispatch] = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user)
      navigate('/login', { state: { from: '/' } })
  }, [user, navigate])

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    dispatch({
      type: 'update',
      payload: Object.fromEntries(fd.entries())
    })
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {user && <h1 className="text-4xl font-semibold text-on-surface-low">Welcome back, <span className="text-on-surface-high">{user.fullName}</span></h1>}
      {user && <form onSubmit={handleSubmit}>
        <label>
          Try changing your name
          <input type="text" name="fullName" />
        </label>
      </form>}
      <NavLink to={'/login'} className="text-xs py-2">To login page, probably couldn't while logged in</NavLink>
    </main>
  )
}

export default Home