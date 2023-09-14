import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout-container'>
        <div>{children}</div>
        <div>Common Part</div>
    </div>
  )
}

export default Layout