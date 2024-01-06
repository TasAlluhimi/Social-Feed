import React from 'react'
import NavBar from '../Components/NavBar'
import {Tabs, Tab} from "@nextui-org/react";
import Cards from '../Components/Cards'
import People from '../Components/People'
import Treanding from './Treanding';
function Home() {

    const [selected, setSelected] = React.useState("main");

  return (
    <>
    
        <div>
        <NavBar />
        </div>

        <div className="flex flex-col w-full p-5 lg:hidden">
          <Tabs
            size="lg"
            className='mt-16'
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            fullWidth="true"
            color="primary"
          >
            {/* first tap  */}
            <Tab 
             key="main"
             title="For You"
             className={``}
             >
              <div className=''>
              <Cards />
              </div>
            </Tab>

            {/* second tap  */}
            <Tab key="new-request"
             title="Treanding"
             className="text-lg font-bold p-5 max-sm:text-sm"
             >
              <Treanding/>
            </Tab>
          </Tabs>
    </div>


        <div className='h-full hidden lg:flex'>
          <div className='text-white'>a</div>
            <div className='lg:w-[70vw] lg:mt-20'>
                <Cards />
            </div>
            <div className='lg:w-[30%] w-0.5 h-0.5 lg:mt-20'>
              <People />
            </div>
        </div>
    </>
  )
}

export default Home