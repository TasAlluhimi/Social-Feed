import React from 'react'
import {Avatar} from "@nextui-org/react";
import { Button } from '@nextui-org/react';

function People() {
  return (
    <div className='fixed w-[30vw]'>
    <div className='px-5 mt-5'>
        You Can Follow
    </div>
        <div className="flex flex-col gap-5 items-start p-5">
            <div className='flex gap-3 w-full'>
                <div>
                    <Avatar name='Tasneem' />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div>Tasneem</div>
                        <div className='text-xs text-gray-500'>Software developer - influential</div>
                    </div>
                <Button
                    className={""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={"solid"}
                    
                    >
                    Follow
                    </Button>
                </div>
            </div>

            <div className='flex gap-3 w-full'>
                <div>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div>Abdullah</div>
                        <div className='text-xs text-gray-500'>Intreasted in books</div>
                    </div>
                <Button
                    className={""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={"solid"}
                    
                    >
                    Follow
                    </Button>
                </div>
            </div>

            <div className='flex gap-3 w-full'>
                <div>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div>Sarah</div>
                        <div className='text-xs text-gray-500'>Subscribe to my channel</div>
                    </div>
                <Button
                    className={""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={"solid"}
                    
                    >
                    Follow
                    </Button>
                </div>
            </div>

            <div className='flex gap-3 w-full'>
                <div>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div>Sam</div>
                        <div className='text-xs text-gray-500'>Model</div>
                    </div>
                <Button
                    className={""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={"solid"}
                    
                    >
                    Follow
                    </Button>
                </div>
            </div>
    </div>

    <hr className=''/>

        <div className='px-5 mt-5'>Treanding</div>
            <div className='px-5 mt-3 text-primary'>
                #Explore_SAFF_Website! 
            </div>
            <div className='px-5 mt-3 text-primary'>
                #New_SAFF_Website
            </div>
            <div className='px-5 mt-3 text-primary'>
                #Tasneem_Alluhimi
            </div>
            <div className='px-5 mt-3 text-primary'>
                #Fake-posts
            </div>
            <div className='px-5 mt-3 text-primary'>
                #Best_frontend_developers
            </div>
    </div>
  )
}

export default People