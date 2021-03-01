import React from 'react'

export const AuthLayout = ({ children }) => {
  return (
    <div class='min-h-screen bg-white flex'>
      {children}
      <div class='hidden lg:block relative w-0 flex-1'>
        <img class='absolute inset-0 h-full w-full object-cover' src='https://cdn.foodandwineespanol.com/2019/07/destacada_starbucks.jpg' alt='' />
      </div>
    </div>
  )
}
