import React from 'react'
import { Button, Carousel } from "@material-tailwind/react";

const Projects = () => {
  return (
    <>

      <div className='w-full bg-mainColor h-60 flex justify-center'>
        <div className=" h-60 mx-auto flex flex-col justify-end">
          <h1 className='text-primaryColor mb-3' style={{ fontSize: 60 }}>Solar Optimization Solution</h1>
          <p className='text-primaryColor font-semibold mb-3'>TelemeTrak's Photo Voltaic (PV) Power Buffering Technology grows solar adoption</p>
        </div>
      </div>

      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
        <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
  <div class="header font-semibold text-black col-span-12 g-white py-5 text-start mt-2">
    <h1 className='text-primaryColor' style={{fontSize:22,marginBottom:2}}>Challenge:</h1>
   <h1 className='font-semibold' style={{fontSize:18}}>* Residential installers struggle to design optimal ("right-sized") PV+Storage systems due to:0</h1>
  </div>
  <div class="col-span-12 text-black p-15 sm:col-span-6">
  <p className='font-semibold'>* NEM 3.0 regulations significantly impacting California's solar market.</p>
  </div>
  <div class="col-span-12 text-black p-15 sm:col-span-6">
  <p className='font-semibold'>* High lithium battery costs and recent regulatory changes like NEM 3.0 making efficient system design crucial.</p>
  </div>
  <div class="header font-semibold text-black col-span-12 g-white py-5 text-start mb-3">
  <p className='font-semibold'> * Bursty PV power from cloud cover wasting energy through "clipping" in current systems.</p>   
  </div>
 
</div>
        </div>
        
      </div>
   

     

    </>

  )
}

export default Projects