import React from 'react'

const Content = () => {
     
    function handleRight(){
        const names = ["Earn","Grow","Give"];
        const Int = Math.floor(Math.random()*3);
        return names [Int];

    }
  return (
    <main>
    <p className='content'>Let's {handleRight()} Money</p>

    </main>
   
    
    

  )
}

export default Content 