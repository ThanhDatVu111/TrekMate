import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24" style={{ marginTop: '-40px' }}>
        <p className="uppercase regular-18 -mt-1 mb-3 text-[#8BAA94]">
          Explore Vietnam with ease
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[490px]">Your Guide to Hidden Gems</h2>
            <p className="regular-18 text-black xl:[max-w-520px]">
              With our travel app, navigating Vietnam’s stunning landscapes has never been easier. From bustling cities to tranquil countryside, we offer offline maps and detailed guides to help you discover Vietnam’s cultural wonders, beautiful beaches, and scenic mountain trails. Invite your friends and family to join the adventure, explore vibrant markets, ancient temples, and hidden local spots.
            </p>
        </div>
      </div>


      <div className="flexCenter max-container relative w-full" style={{ marginTop: '-40px' }}>
        <Image 
          src="/vespa.png"
          alt="vespa"
          width={1240}   // Keep the original image dimensions for clarity
          height={380}
          className="w-full max-w-[1200px] h-auto object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">68 min</p>
              </div>
              <p className="bold-20 mt-2">Ho Chi Minh city</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Nha Trang</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide