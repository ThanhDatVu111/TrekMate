import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-[#8BAA94] p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Travel = () => {
  return (
    <section className="1xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Ha Long Bay"
          subtitle="Quang Ninh, VietNam"
          peopleJoined="9k9+ Reviwed"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Landmark 81"
          subtitle="Ho Chi Minh city, VietNam"
          peopleJoined="8k3+ Reviwed"
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="Floating Market"
          subtitle="Can tho, VietNam"
          peopleJoined="7k5+ Reviwed"
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          title="Ancient Town"
          subtitle="Hoi An, VietNam"
          peopleJoined="12k5+ Reviwed"
        />
        <CampSite 
          backgroundImage="bg-bg-img-5"
          title="Imperial CIty"
          subtitle="Hue, VietNam"
          peopleJoined="8k8+ Reviwed"
        />
      </div>
    </section>
  )
}

export default Travel