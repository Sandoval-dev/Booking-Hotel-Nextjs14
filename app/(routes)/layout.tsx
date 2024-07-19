import React from 'react'
import Navbar from './_components/Navbar'

interface RouterLayoutProps{
    children: React.ReactNode,
  
}
const RouterLayout = ({children}:RouterLayoutProps) => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>{children}</div>
    </>
  )
}

export default RouterLayout