import React from 'react'
import { Button, Carousel } from "@material-tailwind/react";

const Projects = () => {
  return (
    <> 
      <div className='w-full h-56 flex justify-center'>
        <div className=" h-52 mx-auto flex flex-col justify-end">
          <h1 className='text-primaryColor mb-3 font-extrabold' style={{ fontSize: 60 }}>Solar Optimization Solution</h1>
          <p className='text-secondaryColor font-bold mb-3 text-center'>TelemeTrak's Photo Voltaic (PV) Power Buffering Technology grows solar adoption</p>
        </div>
      </div>

      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div class="header font-semibold text-black col-span-12 g-white py-5 text-start mt-2">

              <div className='grid grid-cols-2 gap-[20px]'>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Challenge :</h1>
                  <h1 className='font-semibold'> 
                    <div className='flex text-[16px] h-24 font-bold' style={{wordSpacing:"6px"}}>
                      <p className='relative top-[2px] mr-2 text-[20px]'>*</p>
                      Residential installers struggle to design optimal ("right-sized") PV+Storage systems due to:
                    </div>

                    <div className='px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>NEM 3.0 regulations significantly impacting California's solar market.</li>
                        <li className='mb-3'>High lithium battery costs and recent regulatory changes like NEM 3.0 making efficient system design crucial.</li>
                        <li className='mb-2'>Bursty PV power from cloud cover wasting energy through "clipping" in current systems.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Solution :</h1>
                  <h1 className='font-semibold'>

                    <div className='flex text-[16px] h-24 font-bold' style={{wordSpacing:"6px"}}>
                      <p className='relative top-[2px] mr-2 text-[20px]'>*</p>
                      TelemeTrak's patent-pending technology utilizes supercapacitor buffering to:
                    </div>

                    <div className='px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>Reduce BESS capacity needed in partially cloudy conditions, optimizing system cost.</li>
                        <li className='mb-3'>Eliminate energy waste from "clipping" by storing excess PV power.
                        </li>
                        <li className='mb-3'>Extend BESS cycle life and postpone costly replacements.
                        </li>
                        <li className='mb-2'>Offer an online Design Optimization Tool for installers to design optimal systems.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Results :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>Phase I prototype demonstrated 20-year cost savings of 8-23% for hybrid-storage compared to lithium-only systems.</li>
                        <li className='mb-3'>Potential cost savings could increase to 22-37% with 20% lithium battery price increase.
                        </li>
                        <li className='mb-2'>Technology addresses a wide-ranging problem affecting 2/3 of the planet with intermittent cloud cover.</li>
                      </ul>
                    </div>

                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Impact :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>	Empowers residential installers with optimal system design and reduces waste.</li>
                        <li className='mb-3'> Increases affordability and efficiency of PV+Storage systems for end customers.
                        </li>
                        <li className='mb-2'> Reduces reliance on lithium batteries and contributes to environmental sustainability.</li>
                      </ul>
                    </div>
                  </h1>
                </div>
              </div>

              <div className='mt-5 px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Call to Action :</h1>
                <h1 className='font-semibold'>
                  <div className='py-4 px-8'>
                    <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                      <li className='mb-3'>	Join TelemeTrak in their Phase II project to realize the full potential of this innovative technology.</li>
                      <li className='mb-3'> Help TelemeTrak reach their $1.04 billion US market for residential PV+Storage systems and expand to broader markets
                      </li>
                      <li className='mb-2'> Invest in a clean energy future that is sustainable, efficient, cost-effective, and environmentally friendly. Call TelemeTrak today!</li>
                    </ul>
                  </div>
                </h1>
              </div>

            </div>

          </div>
        </div>

      </div>

      <div className='w-full h-56 flex justify-center'>
        <div className=" h-52 mx-auto flex flex-col justify-end">
          <h1 className='text-primaryColor mb-3 font-extrabold' style={{ fontSize: 60 }}>Asset Tracking Solution</h1>
          <p className='text-secondaryColor font-bold mb-3 text-center'>How TelemeTrak Saved the Air Force Millions and Improved Safety</p>
        </div>
      </div> 

      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div class="header font-semibold text-black col-span-12 g-white py-5 text-start mt-2">

              <div className='grid grid-cols-2 gap-[20px]'>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Challenge :</h1>
                  <h1 className='font-semibold'>
 
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.6rem]'>
                        <li className='mb-2'>An Air Force maintenance squadron, responsible for maintaining 40 heavy transport
                          aircraft worth over $9 billion, faced a major challenge: missing tools.
                          When a tool went missing, a time-consuming manual search was required,
                          wasting valuable time and manpower. Even worse, missing tools posed a serious
                          safety risk, as Foreign Object Damage (FOD) could cause catastrophic damage to
                          aircraft and endanger lives.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Solution :</h1>
                  <h1 className='font-semibold'>
 
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.6rem]'>

                        <li className='mb-2'>TelemeTrak implemented a solution that enabled Airmen to quickly and accurately
                          take inventory of their tool control kits
                          (CTKs) using TelemeTrak’s RFID tracking technology. This eliminated the need for manual
                          searches and significantly reduced the time spent waiting in line to sign out and return tools.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Results :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'><b className='font-bold text-secondaryColor'>Saved millions of dollars :</b> By reducing the time wasted on tool searches and wait times, TelemeTrak's solution saved the Air Force an estimated $74.6 million annually.</li>
                        <li className='mb-3'><b className='font-bold text-secondaryColor'>Improved safety :</b> The accurate tracking of tools helped to prevent FOD incidents, keeping Airmen and aircraft safe.
                        </li>
                        <li className='mb-2'><b className='font-bold text-secondaryColor'>Improved safety :</b> The accurate tracking of tools helped to prevent FOD incidents, keeping Airmen and aircraft safe.
                          Boosted morale: By freeing up time for Airmen to focus on their core tasks, TelemeTrak's solution improved job satisfaction and retention rates.
                        </li>
                      </ul>
                    </div>

                  </h1>
                </div>

                <div className='px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Impact :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>	The success of this case study at the particular squadron has the potential to be replicated across the entire Air Force. With over 5,000 aircraft and 1,000 CTKs, the Air Force could save millions of dollars and improve safety and morale by implementing TelemeTrak's solution.</li>
                        <li className='mb-2'> From the Air Force to your factory floor, track anything with pinpoint accuracy and military-grade security. Our versatile solution streamlines logistics, boosts manufacturing, and empowers service teams.</li>
                      </ul>
                    </div>
                  </h1>
                </div>
              </div>

              <div className='mt-5 px-[10px] py-4 border border-solid border-primaryColor rounded-[10px]'>
                <h1 className='text-secondaryColor mb-3 font-bold text-[22px]'>Call to Action :</h1>
                <h1 className='font-semibold'>
                  <div className='py-4 px-8'>
                    <ul className='text-[15px]'> 
                      <li className='mb-2'> Contact TelemeTrak today to learn more about how we can help your organization achieve similar results.</li>
                    </ul>
                  </div>
                </h1>
              </div>

            </div>

          </div>
        </div>

      </div>


    </>

  )
}

export default Projects