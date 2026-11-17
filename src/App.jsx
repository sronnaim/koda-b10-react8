import { useState } from "react"
import AuthContext from "./contexes/AuthContext"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/Home"
import Login from "./pages/Login"

const router = createBrowserRouter([{
  path: '/',
  Component: Home,
}, {
  path: 'login',
  Component: Login
}])

function App() {
  const [profile, setProfile] = useState(null)

  return (
    <AuthContext.Provider value={[profile, setProfile]}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App