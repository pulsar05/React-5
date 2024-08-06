import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <div className='footer'>
      <h2> CopyRight &copy; {year.getFullYear()}</h2> 
    </div>
  )
}

export default Footer