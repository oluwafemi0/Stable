import React from 'react'

const Sponsors = () => {
  return (
    <>
    <div class="border-r-[40px] border-r-[#003366] border-l-[40px] border-l-[#003366] ">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div class="xl:w-0 xl:flex-1">
                <h2 class="text-2xl font-bold leading-8 tracking-tight  text-[#003366] sm:text-4xl sm:leading-9">
                    Get notified whenever we have an offer or something new
                </h2>
                <p class="max-w-3xl mt-3 text-sm leading-6 text-[#003366]" id="newsletter-headline">
                    Sign up for our newsletter to stay up to date.
                </p>
            </div>
            <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form target="_blank" class="sm:flex" aria-labelledby="newsletter-headline">
                    <input aria-label="Email address" type="email" required="" class="w-full px-5 py-3  text-base leading-6 text-[#003366] placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400" placeholder="Enter your email" />
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 uppercase hover:text-white text-[#003366] transition duration-150 ease-in-out bg-white border-2 border-[#003366]  hover:bg-[#003366] focus:outline-none">Subscribe</button>
                    </div>
                </form>
                <p class="mt-3 text-sm leading-5 text-[#003366]">We will never spam.</p>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Sponsors