import React from 'react'
import { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { HeartIcon } from "../assets/Icons/HeartIcon";
import user from '../assets/Icons/user.svg'
import axios from 'axios';
import {CircularProgress} from "@nextui-org/react";


// email: social@gmail.com 
// pass: 123456a 

function Cards() {

    const [isFollowed, setIsFollowed] = React.useState(false);
    const [like, setLike] = React.useState(false)
    const [data, setData] = React.useState([])
    const [visibleBlogs, setVisibleBlogs] = React.useState(2);
    const [loading, setLoading] = React.useState(true)

    const getData = ()=>{
      axios.get(`https://659832a9668d248edf2446d4.mockapi.io/fake-post`)
      .then(res=>{
          console.log(res.data);
          setData(res.data);
          setLoading(false)
      })
  }

    const handleShowMore = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 1);
      }

    React.useEffect(() => {
      getData()
    
    }, [])
    
  return (
    <>
    {loading && (
          <div className='w-full h-[100vh] max-sm:h-screen bg-black opacity-35 z-20 absolute top-0 left-0 flex justify-center 
          items-center'>
            <CircularProgress aria-label="Loading..." />
          </div>
    )}

    {data.slice(0, visibleBlogs).map((item)=>(
        
            <Card key={item.id} className="max-w-full mb-10">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={item.avatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{item.name}</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <div className='text-lg text-black'>
            {item.title}
        </div>
        <div className='text-black'>
          {item.des}
        </div>
        <span className="pt-2">
          #{item.title} 
        </span>
        <div style={{backgroundImage: `url(${item.image})`}}
        className='w-full h-96 bg-cover bg-center'>

        </div>
      </CardBody>
      <CardFooter className="gap-3">
      <Button
              onClick={() => {setLike(!like)}}
              isIconOnly
              color="danger"
              className="w-fit"
              aria-label="Like"
            >
              <HeartIcon
                filled={like ? true : false}
              />
    </Button>
        
      </CardFooter>
    </Card>
        
    ))}
    <div className='flex justify-end mb-10 p-2'>
        {data.length > visibleBlogs && (
            <Button 
            className=''
            color="primary" 
            onClick={handleShowMore}>
            Show More
            </Button>
        )}
    </div>      
    
    </>
  )
}

export default Cards