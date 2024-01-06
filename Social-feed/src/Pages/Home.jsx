import React from 'react'
import NavBar from '../Components/NavBar'
import Cards from '../Components/Cards'

function Home() {
  return (
    <>
        <NavBar />
        <div className='flex h-full'>
            {/* <div className='lg:w-[10%]'></div> */}
            <div className='border lg:w-[70vw]'>
                <Cards />
            </div>
            {/* <div className='border lg:w-[30%] w-0.5 h-0.5'>

            </div> */}
        </div>
    </>
  )
}

export default Home