import React from 'react'

interface AuthLayoutProps{
    children:React.ReactNode
}
const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div>
        Log
        {children}
        bitiş
    </div>
  )
}

export default AuthLayout