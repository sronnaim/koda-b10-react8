import { useContext, useEffect } from "react"
import AuthContext from "../contexes/AuthContext"
import { NavLink, useNavigate } from 'react-router'

function Home() {
  const [profile] = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!profile)
      navigate('/login', { state: { from: '/' } })
  }, [profile, navigate])
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {profile && <h1 className="text-4xl font-semibold text-on-surface-low">Welcome back, <span className="text-on-surface-high">{profile.fullName}</span></h1>}
      <NavLink to={'/login'} className="text-xs py-2">To login page, probably couldn't while logged in</NavLink>
    </main>
  )
}

export default Home