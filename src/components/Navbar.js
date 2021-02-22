import React from 'react'

export const Navbar = () => {
  return (
    <nav class='bg-white shadow'>
      <div class='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div class='flex justify-between h-16'>
          <div class='flex px-2 lg:px-0'>
            <div class='flex-shrink-0 flex items-center space-x-4'>
              <img class='block lg:hidden h-8 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Workflow' />
              <img class='hidden lg:block h-8 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Workflow' />
              <h1 className='text-black text-lg font-bold'>AgroEncuentro - EANDORIDS</h1>
            </div>
            <div class='hidden lg:ml-6 lg:flex lg:space-x-8'>
              <a href='#' class='border-gray-900 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                Home
              </a>
              <a href='#' class='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                El equipo
              </a>
              <a href='#' class='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                Proyectos
              </a>
              <a href='#' class='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                Ofertas
              </a>
            </div>
          </div>
          <div class='flex items-center lg:hidden'>
            <button class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' aria-expanded='false'>
              <span class='sr-only'>Open main menu</span>

              <svg class='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>

              <svg class='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div class='hidden lg:ml-4 lg:flex lg:items-center'>
            <a href='#' class='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              Iniciar sesión
            </a>
            <a href='#' class='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              Regístrate
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
