import React from 'react'

const Brands = () => {
    return (
        <section className='flex flex-wrap md:flex-nowrap justify-between w-full h-40 items-start lg:px-[80px] md:px-[30px] px-[10px] py-[24px] gap-10'>
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/Google.png" alt="Google" />
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/Microsoft.png" alt="Microsoft" />
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/Spotify.png" alt="Spotify" />
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/MailChimp.png" alt="MailChimp" />
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/Airbnb.png" alt="Airbnb" />
            <img className='md:w-1/12 w-2/12 h-8' src="../../public/Uber.png" alt="Uber" />
        </section>
    )
}

export default Brands