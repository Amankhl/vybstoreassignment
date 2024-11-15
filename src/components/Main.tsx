import Image from 'next/image'
import hero from '../../public/assets/hero.png'

const Main = () => {
  return (
    <section className="justify-center gap-[36px] md:justify-between max-sm:gap-5 w-full flex lg:h-[651px] max-lg:flex-col">

      <div className="w-[582px] max-lg:w-full h-[651px] max-lg:h-[530px] max-md:h-[394px] flex flex-col justify-between gap-[45px] max-md:gap-[24px] lg:gap-4 lg:flex-1 ">
        <div className="text-[64px] font-[700] leading-[76.8px] w-full max-lg:w-[328px] h-[315px] max-md:h-[208px] max-md:gap-[12px] md:gap-4 flex flex-wrap  text-black">
          <span className="boxes bg-white">One</span>
          <span className="boxes bg-white">Stop</span>
          <span className="boxes bg-white">Marketplace</span>
          <div className='w-[456px] max-md:-mt-[12px] space-x-[12px]'>
          <span className="boxes bg-white">For</span>
          <span className="boxes bg-[#00dc82]">Influencers</span>
          </div>
        </div>

        <div className="text-[40px] max-md:text-[24px] max-lg:text-[30px] leading-[48px] max-md:leading-[28.8px] font-[700] w-full  h-[192px] max-md:h-[116px] pr-5 text-[#ffff]">
          <p>
            &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
          Merch, and Share  Content - All in One Hub.&quot;
          </p>
        </div>

        <div className="flex  w-[323px] max-md:w-[215px] h-[54px] max-md:-mt-[7px] lg:mt-2 max-md:h-[38px] text-[17px] max-md:text-[12px] font-[600] gap-[37px] max-md:gap-[24px]">
          <button className="w-[144px] max-md:w-[95px] h-full py-[16px] max-md:py-[10px] px-[24px] max-md:px-[11px] bg-[#00dc82] rounded-xl text-black">
            Demo Store
          </button>
          <div className="relative p-[1px]  items-center justify-center  rounded-2xl bg-gradient-to-r to-[#FF5D5D] from-[#4794FF]">
            <button className="w-[142px] max-md:w-[95px] h-full relative inline-flex items-center justify-center py-[16px] max-md:py-[12px] px-[24px] max-md:px-[16px] border- overflow-hidden font-semibold transition-all duration-200 ease-out rounded-2xl bg-[#181818] group">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r to-[#FF5D5D] from-[#4794ff]">
                Join waitlist
              </span>
            </button>
          </div>
        </div>

      </div>

      <div className="w-[582px] max-xl:w-full h-[650.5px] max-lg:h-[530px] max-md:h-[335px] flex flex-1 md:justify-end">
        <Image
          src={hero}
          alt="Hero image"
          className="rounded-xl w-full h-full"
        ></Image>
      </div>
    </section>
  )
}

export default Main