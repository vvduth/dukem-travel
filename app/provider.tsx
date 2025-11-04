import React from 'react'
import Header from '@/components/Header'
const Provider = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}

export default Provider
