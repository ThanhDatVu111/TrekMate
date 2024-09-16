import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 -mt-10">
        <Image 
            src="/ha-long-bay.png" // Adjust the path based on where your image is stored
            alt="Ha Long Bay"
            width={500} // Set the desired width
            height={300} // Set the desired height
        />
        <h1 className="bold-52 lg:bold-88">Viet Nam</h1>
        <p className="regular-16 mt-6 text-black xl:max-w-[520px]">
        We're here to join you on your journey to discover the pure beauty of nature. Let us guide your adventure around the world, all within a single app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-black">
            406k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-2 rounded-3xl bg-[#9B8975] px-7 py-5 ml-auto">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-white">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Viet Nam</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-white">Distance</p>
              <p className="bold-20 text-white">8,584 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-white">Elevation</p>
              <p className="bold-20 text-white">13,814 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero