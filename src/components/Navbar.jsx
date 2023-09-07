import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class='p-3 bg-white'>
    <nav class="relative bg-white flex items-center justify-between sm:h-10 md:justify-center py-6 px-4  mt-2">
    <div class="flex items-center ml-[100px] flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
            <a href="" aria-label="Home" class='text-3xl mb-2 text-[#003366] font-bold'>
                Stable.
            </a>
            <div class="-mr-2 flex items-center md:hidden">
                <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>

    
    <div class="hidden ml-[1300px] md:flex md:space-x-10">
        <a href="/"
            class="font-medium text-[#003366] hover:text-white p-2 hover:bg-[#003366] transition duration-150 ease-in-out">HOME</a>
        <a href="#about"
            class="font-medium text-[#003366] hover:text-white p-2 hover:bg-[#003366] transition duration-150 ease-in-out">ABOUT</a>
        <a href="#timeline"
            class="font-medium text-[#003366] hover:text-white p-2 hover:bg-[#003366] transition duration-150 ease-in-out">INSTALL</a>
        <a href="#timeline"
            class="font-medium text-[#003366] hover:text-white p-2 hover:bg-[#003366] transition duration-150 ease-in-out">CONTACT</a>
            
    </div>
</nav>
</div>
    </>
  )
}

export default Navbar