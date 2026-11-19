import { useContext, useEffect } from "react"
import { NavLink, useNavigate } from "react-router"
import authContext from "../contexes/Auth/authContext"
import { usersContext } from "../contexes/Users/usersContext"
import { LuUser } from "react-icons/lu"

function Profile() {
  const [user, dispatchUser] = useContext(authContext)
  const [, dispatchUsers] = useContext(usersContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  if (!user) return null

  function handleSubmit(e) {
    e.preventDefault()
    const update = Object.fromEntries(new FormData(e.currentTarget))

    console.log(update)

    dispatchUsers({
      action: 'update',
      payload: { username: user.username, update }
    })
    dispatchUser({
      action: 'update',
      payload: update
    })

    window.alert('Profile updated')
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="mx-auto p-4 rounded-2xl *:text-center bg-surface shadow-sm shadow-black/30 text-sm">
        <h1 className='font-semibold text-xl'>My profile</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4'>
          <label className="w-full">
            <span className="block text-start">First Name</span>
            <span className="bg-surface-container flex gap-2 items-center p-2 rounded-xl">
              <LuUser />
              <input type="text" name="firstName" autoComplete='name' className="w-full" />
            </span>
          </label>
          <div>
            <button type='submit' className='w-fit px-4 py-2 text-sm bg-primary text-on-primary rounded-xl shadow-sm shadow-black/30 font-semibold'>
              Save Profile
            </button>
          </div>
        </form>
      </div>
      <NavLink to={'/'} className="text-xs py-2">Back to Home</NavLink>
    </main>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     First Name
    //     <input type="text" name="firstName" defaultValue={user.firstName} />
    //   </label>
    //   <button type="submit">Save profile</button>
    // </form>
  )
}

export default Profile