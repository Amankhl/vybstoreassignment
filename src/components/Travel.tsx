import Image from 'next/image'
import { FaPlane } from "react-icons/fa6";
import { itineraries } from '../../public/assets/constant';
import influencer from '../../public/assets/profile.png';
import mountain2 from '../../public/assets/mountain2.png';
import vector from '../../public/assets/vector1.png'
import plane from '../../public/assets/plane.png'
import vector2 from '../../public/assets/vector2.png'


const Travel = () => {


    return (
        <section className='w-full space-y-[36px]'>

            <div className="w-full text-[34px] max-md:text-[20px] font-[700] flex flex-wrap justify-between text-[#ffff] items-center rounded-[24px] h-[112px] max-md:h-[64px] bg-black p-[24px] max-md:p-[16px]">
                <p className=" font-bold md:pb-3 hover:border-b border-[#00dc82]">Travel</p>
                <p className=" hover:border-b border-[#00dc82] font-bold md:pb-3">Digital</p>
                <p className=" hover:border-b border-[#00dc82] font-bold md:pb-3">Brand</p>
                <p className=" hover:border-b border-[#00dc82] font-bold md:pb-3">Merch</p>
            </div>

            <div className="w-full space-y-[32px] bg-black rounded-[24px]">

                <div className="bg-mountain bg-cover h-[540px] max-md:h-[250px] font-[700] rounded-t-[24px] flex flex-col text-white items-center justify-center w-full text-center p-[100px] max-md:p-[24px]">
                    <h1 className="uppercase 2xl:text-[180px] lg:text-[140px] max-lg:text-[100px] max-md:text-[40px] leading-tight md:leading-[6rem] lg:leading-[216px]">
                        Travel
                    </h1>
                    <p className="2xl:text-[34px] lg:text-[29px] max-lg:text-[24px] max-md:text-[14px] w-[700px] max-md:w-[280px]">
                        Turn your travel experience into an itinerary, travel package with
                        VYB Store, and share it with your true followers.
                    </p>
                </div>

<div className='w-full'>

                    <div className="w-full bg-black text-white flex flex-col gap-[56px] py-10">
                        <h3 className="text-[34px] font-bold max-md:text-[27px] text-center h-[41px] w-full">
                        Explore Our Curated Travel Itineraries
                    </h3>
                    <div className="flex overflow-x-auto overflow-y-hidden gap-[24px] max-w-full  px-[16px] scrollbar-hidden">
                        {itineraries.map((img, id) => (
                            <div
                                className="relative flex-shrink-0 h-[470px] max-md:h-[272px] md:w-[270px] max-md:w-[153px] pb-[12px]"
                                key={id}
                            >
                                <Image
                                    src={img.src}
                                    alt="image"
                                    width={270}
                                    height={480}
                                    className="rounded-lg"
                                />
                                <div className="absolute bottom-2 flex flex-col w-full items-center text-center">
                                    <div className="w-[252px] max-md:w-[153px] h-[59px] max-md:h-[43px]">
                                        <h3 className="font-bold text-[22px] max-md:text-[16px] md:text-2xl leading-[26.4px] max-md:leading-[19.2px]">{img.title}</h3>
                                        <p className="font-medium md:font-bold text-[18px] max-md:text-[14px] leading-[21.6px] max-md:leading-[16.8px]">{img.state}</p>
                                    </div>

                                    <div className="flex justify-between w-[191px] h-[31px] max-md:hidden items-center gap-2 px-[8px] py-[4px] rounded-[16px] bg-white">
                                        <p className="text-[18px] w-[152px] leading-[21.6px] md:text-lg font-[700] text-black">
                                            Samira Hadid
                                        </p>
                                        <Image
                                            src={influencer}
                                            alt="avatar"
                                            className="rounded-full w-[23px] h-[23px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                        </div>
                    </div>
                </div>


                {/* for web */}
                    <div className="relative w-full h-full max-md:h-[600px] text-white bg-black overflow-hidden rounded-b-3xl">

                        <div className="absolute top-0 left-[-10rem] max-md:left-[-2rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#FF5FD2] to-[#000000] opacity-[0.2] blur-3xl" />
                    <div className="absolute top-0 right-[-10rem] max-md:right-[-1rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#4885FFD6] to-[#000000] opacity-[0.2] blur-3xl" />
                    <h3 className="text-[2.125rem] max-md:text-[1.3rem] font-bold text-center text-white pt-8">
                        How to list?
                    </h3>

                    <Image
                        src={mountain2}
                        alt="mountain"
                            className="w-full h-full max-md:absolute bottom-10 max-md:h-[149.55px] object-cover"
                    />
                        <Image
                            src={vector}
                            alt="vector"
                            className="absolute top-[7rem] left-[50%] translate-x-[-50%] w-full max-md:hidden"
                        />
                        <Image
                            src={vector2}
                            alt="vector"
                            className="absolute top-[8rem] left-[50%] translate-x-[-50%] object-fill w-full md:hidden"
                        />

                    <div className="max-md:hidden z-50 absolute w-full 2xl:top-[12rem] md:top-[6rem]  h-full ">
                        <div className=" w-full flex justify-between ">
                                <div className="absolute 2xl:top-[1%] md:top-[12%] flex flex-col gap-2 max-lg:gap-0 max-2xl:left-[8%] 2xl:left-[10%] items-center">
                                    <Image
                                        src={plane}
                                        alt="plane"
                                        className=" w-[96px] h-[96px] rotate-[5deg]"
                                    />
                                <h1 className="text-xl font-bold ">01</h1>
                                <p className="font-bold text-[1.6rem] max-xl:text-[1.2rem] max-w-[10rem] w-full text-center">
                                    Create Itinerary
                                </p>
                            </div>
                                <div className="flex flex-col gap-2 max-lg:gap-0 absolute 2xl:top-[17%] xl:top-[29%] md:top-[27%] 2xl:left-[33rem] md:left-[38%] xl:left-[40%] items-center">
                                    <Image
                                        src={plane}
                                        alt="plane"
                                        className=" w-[96px] h-[96px] -rotate-[26deg]"
                                    />
                                <h1 className="text-xl font-bold ">02</h1>
                                    <p className="font-bold text-[1.6rem] max-xl:text-[1.2rem] max-w-[13rem] w-full text-center">
                                    Convert into Travel Package
                                </p>
                            </div>
                                <div className="flex absolute md:right-[8%] 2xl:top-4 md:top-[12%]  gap-2 max-lg:gap-0 flex-col items-center max-xl:right-[3%] 2xl:right-[11%]">
                                    <Image
                                        src={plane}
                                        alt="plane"
                                        className=" w-[96px] h-[96px] -rotate-[52deg]"
                                    />
                                <h1 className="text-xl font-bold ">03</h1>
                                    <p className="font-bold text-[1.6rem] max-xl:text-[1.2rem] max-w-[10rem] w-full text-center">
                                    Earn by sharing
                                </p>
                            </div>
                        </div>

                        <div className="md:absolute 2xl:top-[60%] md:top-[70%] z-[50] w-full h-full ">
                                <h1 className=" xl:text-[34px] md:text-[23px] font-[400] text-center w-full  ">
                                You Curate Experience We Make It Happen
                            </h1>
                        </div>
                    </div>

                        <div className="md:hidden absolute w-full top-[7rem] h-full">
                            <div className=" w-full flex justify-between ">
                                <div className="flex flex-col gap-4 relative top-9 left-2  items-center">
                                    <FaPlane className={`w-7 h-7 rotate-45`} />
                                    <h1 className="text-sm font-bold ">1</h1>
                                    <p className="font-bold text-[14px] max-w-[5rem] w-full text-center">
                                        Create Itinerary
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4  relative top-[4.5rem] left-[1.5%] items-center">
                                    <FaPlane className={`w-7 h-7 rotate-0`} />
                                    <h1 className="text-sm font-bold ">2</h1>
                                    <p className="font-bold text-sm max-w-[7rem] w-full text-center">
                                        Convert into Travel Package
                                    </p>
                                </div>
                                <div className="flex relative top-10 right-4 gap-4 flex-col items-center">
                                    <FaPlane className={`w-7 h-7 -rotate-45`} />
                                    <h1 className="text-sm font-bold ">3</h1>
                                    <p className="font-bold text-sm max-w-[5rem] w-full text-center">
                                        Earn by sharing
                                    </p>
                                </div>
                        <div className="max-md:absolute z-50 bottom-0 w-full h-full max-md:top-[24rem] flex justify-center">
                            <h1 className="max-md:text-[18px] font-[400] w-[50%] text-center">
                                You Curate Experience We Make It Happen
                            </h1>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Travel