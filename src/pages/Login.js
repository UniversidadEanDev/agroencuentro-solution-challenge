import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/stores/Auth/context'
import { signIn } from '../context/actions/user.action'

export const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const { dispatchUser } = useAuth()
  const history = useHistory()

  const onSubmit = async (event) => {
    event.preventDefault()
    if (email !== null && password !== null) {
      await signIn(email, password, dispatchUser)
      const from = { pathname: '/dashboard' }
      history.replace(from)
    } else {
      // do some
    }
  }
  return (
    <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
      <div className='mx-auto w-full max-w-sm lg:w-96'>
        <div>
          <img className='h-12 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Workflow' />
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            ¡Un gusto verte de nuevo!
          </h2>
        </div>

        <div className='mt-8'>

          <div className='mt-6'>
            <form action='#' method='POST' className='space-y-6'>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Correo Electrónico
                </label>
                <div className='mt-1'>
                  <input id='email' name='email' type='email' autoComplete='email' required className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' onChange={(value) => setEmail(value.target.value)} />
                </div>
              </div>

              <div className='space-y-1'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Contraseña
                </label>
                <div className='mt-1'>
                  <input id='password' name='password' type='password' autoComplete='current-password' required className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' onChange={(value) => setPassword(value.target.value)} />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input id='remember_me' name='remember_me' type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                  <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                    Recordarme
                  </label>
                </div>

                <div className='text-sm'>
                  <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                    ¿Olvidaste la contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={onSubmit}
                >
                  Entrar
                </button>
              </div>
              <div className='text-sm flex items-center justify-center'>
                <p>¿Aún no tienes una cuenta? <Link to='/signup' className='font-medium text-indigo-600 hover:text-indigo-500'>Crea una</Link>

                </p>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
