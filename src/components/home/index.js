import React from 'react'
import homebanner from '../../assests/home_banner.jpg';
import { Button, Carousel } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate=useNavigate();

  const fun=()=>{
    navigate('/project')
  }
  return (
    <>
      <div className="home-section">
        <h4 className='heading text-white'>Continuous tracking for unpowered logistics assets</h4>
        <p className='text-white font-semibold w-[60%] text-lg'>Stop wasting energy and money. Join the TelemeTrak revolution and experience <br /> the power of a smarter, more efficient solar system.</p>
      </div>
      <div className="mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-1 flex justify-center">
        <div>
          <h2 className="text-primaryColor text-center py-20 font-bold text-2xl hover:text-secondaryColor cursor-pointer">Our Expertise</h2>
        </div>
      </div>
      <div class="flex-col w-full md:flex-row mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-12 flex justify-center">
        <div class="w-1/2 px-12 text-justify space-x-2">
          <p className='text-primaryColor font-semibold text-xl pb-4'>Solar Optimization</p>
          <p className='text-black font-medium text-lg'>
            <p className='text-secondaryColor font-semibold'>Power Up Your Savings:</p>
            <p className='whitespace-normal'>Optimize Your Solar with TelemeTrak's Innovative Buffering Technology</p>
            <div className='py-10'>
<p className='text-secondaryColor font-semibold'>Stop wasting energy and money: </p>
<p>Frustrated with inconsistent solar power production and expensive battery replacements? Introducing TelemeTrak's revolutionary buffering technology - your key to maximizing solar efficiency and savings.</p>
            </div>
          </p>
          <Button className='bg-secondaryColor text-white' onClick={fun}>Know More</Button>
        </div>
        <div class="w-1/2">
          <Carousel className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        
      </div>
    </>
  )
}

export default Home