import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/Home"
import Login from "./pages/Login"
import AuthProvider from "./contexes/AuthProvider"

const router = createBrowserRouter([{
  path: '/',
  Component: Home,
}, {
  path: 'login',
  Component: Login
}])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App