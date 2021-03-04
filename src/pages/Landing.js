import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <section className='text-black'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='sm:text-4xl text-3xl mb-4 font-medium text-black'>
            Bienvenidos a AgroEncuentro.
          </h1>
          <p className='leading-relaxed mb-8 font-normal'>Plataforma (website) que ofrece el servicio de conexión y networking entre agricultores y empresas que se dedican al aprovechamiento de este residuo agrícola, generando un impacto positivo ambiental y  socioeconómico tanto para las familias dependientes de esta actividad, como para el medio ambiente.
          </p>
          <div className='flex justify-center'>
            <Link to='/signup' className='ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
              EMPEZAR
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
