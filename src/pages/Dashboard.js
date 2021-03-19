import React, { useState } from 'react'
import { logout } from '../context/actions/user.action'
import { useAuth } from '../context/stores/Auth/context'

export const Dashboard = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [dropdownIsOpen, setdropdownIsOpen] = useState(false)
  const { dispatchUser } = useAuth()
  const openCloseSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }
  const openCloseDropdown = () => {
    setdropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <div class='h-screen flex overflow-hidden bg-gray-100'>

      {
  sidebarIsOpen &&
    <div class='lg:hidden'>
      <div class='fixed inset-0 flex z-40'>

        <div class='fixed inset-0'>
          <div class='absolute inset-0 bg-gray-600 opacity-75' aria-hidden='true' />
        </div>
        <div class={`${!sidebarIsOpen ? 'hidden' : ''} relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-yellow-700`}>
          <div class='absolute top-0 right-0 -mr-12 pt-2'>
            <button class='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={openCloseSidebar}>
              <span class='sr-only'>Close sidebar</span>

              <svg class='h-6 w-6 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div class='flex-shrink-0 flex items-center px-4'>
            <img class='h-8 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Easywire logo' />
            <h1 class='font-bold text-white'>AGROENCUENTRO</h1>
          </div>
          <nav class='mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto' aria-label='Sidebar'>
            <div class='px-2 space-y-1'>
              <a href='#' class='bg-yellow-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md' aria-current='page'>
                <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
                Home
              </a>

              <a href='#' class='text-cyan-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Historial
              </a>

              <a href='#' class='text-cyan-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' />
                </svg>
                Balances
              </a>

              <a href='#' class='text-cyan-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
                <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                Reportes
              </a>
            </div>
            <div class='mt-6 pt-6'>
              <div class='px-2 space-y-1'>
                <a href='#' class='group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-200 group-hover:text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  Configuración
                </a>

                <a href='#' class='group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  Ayuda
                </a>

                <a href='#' class='group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                  </svg>
                  Privacidad
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class='flex-shrink-0 w-14' aria-hidden='true' />
      </div>

    </div>
}

      <div class='hidden lg:flex lg:flex-shrink-0'>
        <div class='flex flex-col w-64'>
          <div class='flex flex-col flex-grow bg-yellow-700 pt-5 pb-4 overflow-y-auto'>
            <div class='flex items-center flex-shrink-0 px-4'>
              <img class='h-8 w-auto' src='https://images.vexels.com/media/users/3/185524/isolated/preview/e20e4f7385e97848955aea3fe29d577a-dise-ntilde-o-de-flor-de-grano-de-caf-eacute-by-vexels.png' alt='Easywire logo' />
              <h1 class='font-bold text-white'>AGROENCUENTRO</h1>
            </div>
            <nav class='mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto' aria-label='Sidebar'>
              <div class='px-2 space-y-1'>
                <a href='#' class='bg-yellow-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md' aria-current='page'>
                  <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                  </svg>
                  Home
                </a>

                <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  Historial
                </a>

                <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' />
                  </svg>
                  Balances
                </a>

                <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                  <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  Reportes
                </a>
              </div>
              <div class='mt-6 pt-6'>
                <div class='px-2 space-y-1'>
                  <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                    <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                    Configuración
                  </a>

                  <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                    <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    Ayuda
                  </a>

                  <a href='#' class='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-yellow-600'>
                    <svg class='mr-4 h-6 w-6 text-cyan-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                    </svg>
                    Privacidad
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class='flex-1 overflow-auto focus:outline-none' tabindex='0'>
        <div class='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none'>
          <button class='px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden' onClick={openCloseSidebar}>
            <span class='sr-only'>Open sidebar</span>
            <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </button>
          <div class='flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
            <div class='flex-1 flex'>
              <form class='w-full flex md:ml-0' action='#' method='GET'>
                <label for='search_field' class='sr-only'>Search</label>
                <div class='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div class='absolute inset-y-0 left-0 flex items-center pointer-events-none' aria-hidden='true'>
                    <svg class='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clip-rule='evenodd' />
                    </svg>
                  </div>
                  <input id='search_field' name='search_field' class='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm' placeholder='Buscar Ofertas' type='search' />
                </div>
              </form>
            </div>
            <div class='ml-4 flex items-center md:ml-6'>
              <button class='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'>
                <span class='sr-only'>View notifications</span>
                <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                </svg>
              </button>

              <div class='ml-3 relative'>
                <div>
                  <button class='max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50' id='user-menu' aria-haspopup='true' onClick={openCloseDropdown}>
                    <img class='h-8 w-8 rounded-full' src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt='' />
                    <span class='hidden ml-3 text-gray-700 text-sm font-medium lg:block'><span class='sr-only'>Open user menu for </span></span>
                    <svg class='hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' />
                    </svg>
                  </button>
                </div>
                {
  dropdownIsOpen &&
    <div class='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
      <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Perfil</a>
      <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Configuración</a>
      <button onClick={() => logout(dispatchUser)} class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Cerrar Sesión</button>
    </div>
}
              </div>
            </div>
          </div>
        </div>
        <main class='flex-1 relative pb-8 z-0 overflow-y-auto'>
          <div class='bg-white shadow'>
            <div class='px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
              <div class='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
                <div class='flex-1 min-w-0'>
                  <div class='flex items-center'>
                    <img class='hidden h-16 w-16 rounded-full sm:block' src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt='' />
                    <div>
                      <div class='flex items-center'>
                        <img class='h-16 w-16 rounded-full sm:hidden' src='http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' alt='' />
                        <h1 class='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'>
                          ¡Bienvenido a Agroencuentro!
                        </h1>
                      </div>
                      <dl class='mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
                        <dt class='sr-only'>Company</dt>
                        <dd class='flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6'>
                          <svg class='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z' clip-rule='evenodd' />
                          </svg>
                          Sin ubicación
                        </dd>
                        <dt class='sr-only'>Account status</dt>
                        <dd class='mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize'>
                          <svg class='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd' />
                          </svg>
                          Cuenta Verificada
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class='mt-8'>
            <div class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h2 class='text-lg leading-6 font-medium text-gray-900'>Estadísticas</h2>
              <div class='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>

                <div class='bg-white overflow-hidden shadow rounded-lg'>
                  <div class='p-5'>
                    <div class='flex items-center'>
                      <div class='flex-shrink-0'>
                        <svg class='h-6 w-6 text-gray-400' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                          <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' />
                        </svg>
                      </div>
                      <div class='ml-5 w-0 flex-1'>
                        <dl>
                          <dt class='text-sm font-medium text-gray-500 truncate'>
                            Has ahorrado
                          </dt>
                          <dd>
                            <div class='text-lg font-medium text-gray-900'>
                              $0
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class='bg-gray-50 px-5 py-3'>
                    <div class='text-sm'>
                      <a href='#' class='font-medium text-cyan-700 hover:text-cyan-900'>
                        View all
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <h2 class='max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8'>
              Actividad reciente
            </h2>

            <div class='shadow sm:hidden'>

              <nav class='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200' aria-label='Pagination'>
                <div class='flex-1 flex justify-between'>
                  <a href='#' class='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'>
                    Previous
                  </a>
                  <a href='#' class='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'>
                    Next
                  </a>
                </div>
              </nav>
            </div>

            <div class='hidden sm:block'>
              <div class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div class='flex flex-col mt-2'>
                  <div class='align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg'>

                    <nav class='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6' aria-label='Pagination'>
                      <div class='hidden sm:block'>
                        <p class='text-sm text-gray-700'>
                          Showing
                          <span class='font-medium'>1</span>
                          to
                          <span class='font-medium'>10</span>
                          of
                          <span class='font-medium'>20</span>
                          results
                        </p>
                      </div>
                      <div class='flex-1 flex justify-between sm:justify-end'>
                        <a href='#' class='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
                          Previous
                        </a>
                        <a href='#' class='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
                          Next
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
