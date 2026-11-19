import { useContext, useEffect } from "react"
import { Link, NavLink, useNavigate } from 'react-router'
import authContext from "../contexes/Auth/authContext"

function Home() {
  const [user] = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user)
      navigate('/login')
  }, [user, navigate])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {user && <h1 className="text-4xl font-semibold text-on-surface-low">Welcome back, <span className="text-on-surface-high">{user.firstName}</span></h1>}
      <Link to={'/profile'} className="text-xs">Edit your profile →</Link>
      <NavLink to={'/login'} className="text-xs">To login page, probably couldn't while logged in</NavLink>
    </main>
  )
}

export default Home