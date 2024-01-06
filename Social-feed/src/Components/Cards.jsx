import React from 'react'
import { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { HeartIcon } from "../assets/Icons/HeartIcon";
import user from '../assets/Icons/user.svg'
import axios from 'axios';

function Cards() {

    const [isFollowed, setIsFollowed] = React.useState(false);
    const [like, setLike] = React.useState(false)
    const [data, setData] = React.useState([])
    const [visibleBlogs, setVisibleBlogs] = React.useState(2);

    const getData = ()=>{
        axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts`)
        .then(res=>{
            console.log(res.data.blogs);
            // setData(res.data.blogs);
            const blogsArray = Object.values(res.data.blogs);

            setData(blogsArray);
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
    {data.slice(0, visibleBlogs).map((item)=>(
        
            <Card key={item.id} className="max-w-full mb-10">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={user} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">username</h4>
            <h5 className="text-small tracking-tight text-default-400">@{item.user_id}</h5>
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
          {item.content_text}
        </div>
        <span className="pt-2">
          #{item.category} 
        </span>
        <div style={{backgroundImage: `url(${item.photo_url})`}}
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
    <div className='flex justify-end mb-10'>
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