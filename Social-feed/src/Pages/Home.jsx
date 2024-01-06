import React from 'react'
import NavBar from '../Components/NavBar'
import Cards from '../Components/Cards'
import People from '../Components/People'

function Home() {

  return (
    <>
    
        <div>
        <NavBar />
        </div>
        <div className='flex h-full'>
            <div className='lg:w-[70vw] mt-20'>
                <Cards />
            </div>
            <div className='lg:w-[30%] w-0.5 h-0.5 mt-20'>
              <People />
            </div>
        </div>
    </>
  )
}

export default Home