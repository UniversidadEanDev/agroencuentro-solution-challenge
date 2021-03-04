import React, { useState } from 'react'
import { signUp } from '../context/actions/user.action'
import { useAuth } from '../context/stores/Auth/context'
import { Link, useHistory, useLocation } from 'react-router-dom'

export const SignUp = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const { dispatchUser } = useAuth()
  const history = useHistory()
  const location = useLocation()

  const onSubmit = async (event) => {
    event.preventDefault()
    if (email !== null && password !== null && confirmPassword !== null) {
      if (password === confirmPassword) {
        await signUp(email, password, dispatchUser)
        const from = { pathname: '/dashboard' }
        console.log('location', location)
        console.log('from', from)
        history.replace(from)
      } else {
        console.log('Las contraseñas no coinciden')
      }
    } else {
      console.log('Llena todos los campos')
    }
  }

  return (
    <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
      <div className='mx-auto w-full max-w-sm lg:w-96'>
        <div>
          <img className='h-12 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Workflow' />

          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            Registrate y haz parte del cambio
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
              <div className='space-y-1'>
                <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700'>
                  Confirma tu Contraseña
                </label>
                <div className='mt-1'>
                  <input
                    id='confirm-password' name='confirm-password' type='password' autoComplete='current-password' required className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    onChange={(value) => setConfirmPassword(value.target.value)}
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input id='remember_me' name='remember_me' type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                  <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                    Recordarme
                  </label>
                </div>
              </div>
              <div>
                <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={onSubmit}>
                  Crear Cuenta
                </button>
              </div>
              <div className='text-sm flex items-center justify-center'>
                <p>¿Ya tienes una cuenta? <Link to='signin' className='font-medium text-indigo-600 hover:text-indigo-500'>Entra</Link>
                </p>

              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}
