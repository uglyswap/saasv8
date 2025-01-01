import { useState } from 'react'
    import { Link } from 'react-router-dom'
    import { toast } from 'react-toastify'

    export default function Register() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const handleRegister = (e) => {
        e.preventDefault()
        // TODO: Implement registration logic
        toast.success('Registered successfully!')
      }

      return (
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">
            Register
          </h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-light mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-light mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark/50 border border-dark/10 rounded-lg px-4 py-2 text-light focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-light">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      )
    }