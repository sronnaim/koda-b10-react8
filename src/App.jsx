import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/Home"
import Login from "./pages/Login"
import AuthProvider from "./contexes/Auth/AuthProvider"
import UsersProvider from './contexes/Users/UsersProvider'
import Profile from './pages/Profile'

const router = createBrowserRouter([{
  path: '/',
  Component: Home,
}, {
  path: 'login',
  Component: Login
}, {
  path: 'profile',
  Component: Profile
}])

function App() {
  return (
    <UsersProvider >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </UsersProvider>
  )
}

export default App