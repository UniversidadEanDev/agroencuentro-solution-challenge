import React from 'react'

export const Navbar = () => {
  return (
    <nav class='bg-white shadow'>
      <div class='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div class='flex justify-between h-16'>
          <div class='flex px-2 lg:px-0'>
            <div class='flex-shrink-0 flex items-center space-x-4'>
              {/* <img class='block lg:hidden h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='Workflow' /> */}
              <img class='hidden lg:block h-8 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Workflow' />
              <h1 className='text-black text-lg font-bold'>AgroEncuentro</h1>
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
            <a href='#' class='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Iniciar sesión
            </a>
            <a href='#' class='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Regístrate
            </a>
          </div>
        </div>
      </div>

      {/* <div class='hidden lg:hidden'>
        <div class='pt-2 pb-3 space-y-1'>
          <a href='#' class='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>Dashboard</a>
          <a href='#' class='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>Team</a>
          <a href='#' class='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>Projects</a>
          <a href='#' class='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>Calendar</a>
        </div>
        <div class='pt-4 pb-3 border-t border-gray-200'>
          <div class='flex items-center px-4'>
            <div class='flex-shrink-0'>
              <img class='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=UF9xxf6pVv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
            </div>
            <div class='ml-3'>
              <div class='text-base font-medium text-gray-800'>Tom Cook</div>
              <div class='text-sm font-medium text-gray-500'>tom@example.com</div>
            </div>
            <button class='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span class='sr-only'>View notifications</span>
              <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
              </svg>
            </button>
          </div>
          <div class='mt-3 space-y-1'>
            <a href='#' class='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>Your Profile</a>
            <a href='#' class='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>Settings</a>
            <a href='#' class='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>Sign out</a>
          </div>
        </div>
      </div> */}
    </nav>
  )
}