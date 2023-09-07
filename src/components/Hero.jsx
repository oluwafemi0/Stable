import React from 'react'

const Hero = () => {
  return (
    <>
    <div class="bg-[url('https://images.unsplash.com/photo-1637417494521-78b4d1d33029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover flex flex-col h-screen">
    
    <header class="flex-grow flex flex-col justify-center items-center px-8">
    <div class="w-1/3  mr-[1200px] mb-[100px]">
            <h1  class="text-4xl lg:text-6xl uppercase  text-white font-bold">install a <span class="text-[#003366] ">stable</span> power system in your house</h1>
            <br />
            <p class="w-2/3 text-white font-semibold text-xl mb-10">Installing an off-grid inverter system offers energy independence and sustainability. It harnesses renewable sources like solar or wind to generate power, reducing reliance on traditional grids. This choice promotes environmental responsibility and safeguards against power outages. Embracing this technology empowers individuals and fosters a greener future.</p>
            
            

            <button class="  text-white bg-transparent hover:bg-white uppercase border-2 hover:text-[#003366] border-white hover:border-[#003366] text-base font-medium px-4 py-2 ">Learn More</button>
            <br />
            <br />
            <div class="w-64 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
        <div class="block  overflow-hidden  text-center ">
            <div class="bg-[#003366] font-bold uppercase text-white py-1">
                wait-list
            </div>
            <div class="pt-1 border-l border-r border-white bg-white">
                <span class="text-5xl text-[#003366] font-bold leading-tight">
                9
              </span>
            </div>
            <div class="border-l border-r border-b  text-center border-white bg-white -pt-2 -mb-1">
                <span class="text-sm uppercase font-bold text-[#003366]">
                next install
              </span>
            </div>
            <div class="pb-2 border-l border-r border-b  text-center border-white bg-white">
                <span class="text-xs uppercase font-bold text-[#003366] leading-normal">
                september 5
              </span>
            </div>
        </div>
    </div>

          </div>

          
    </header>
</div>
    </>
  )
}

export default Hero