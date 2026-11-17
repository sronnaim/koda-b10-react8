import { LuLock, LuMail } from 'react-icons/lu'

function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="mx-auto bg-green-500 p-4 rounded-2xl *:text-center bg-surface shadow-sm shadow-black/30 text-sm">
        <h1>Sign in with Email</h1>
        <p>Make a new doc to bring your team together</p>
        <form className='flex flex-col gap-4 mt-4'>
          <label>
            <span className="sr-only">Email</span>
            <span className="bg-surface-container flex gap-2 items-center p-2 rounded-xl">
              <LuMail />
              <input type="email" name="email" autoComplete='email' className="w-full" />
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
    </main>
  )
}

export default Login