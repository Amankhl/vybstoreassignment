import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const Influencers = () => {
    const pics = [
        { src: "/assets/influencers/3.png", title: "Jay" },
        { src: "/assets/influencers/1.png", title: "Samira" },
        { src: "/assets/influencers/2.png", title: "Samira" },
        { src: "/assets/influencers/4.jpg", title: "Jay" },
    ];

    return (
        <div className="relative flex gap-10  max-md:gap-[16px] flex-col w-full  2xl:h-[345px] lg:mb-2">
            <h2 className="text-[#00dc82] text-[34px] max-md:text-[24px] leading-[40.8px] font-[700] text-center">
                Our Influencers
            </h2>
            <div className="grid grid-cols-4 gap-10 max-lg:gap-[4rem] w-full h-fit max-md:overflow-x-scroll max-md:overflow-y-hidden scrollbar-hide">
                {pics.map((itms, idx) => (
                    <div key={idx} className="relative group">
                        {/* Hover Border */}
                        <div className="absolute top-[18px] left-[17px] max-md:top-[6px] max-md:left-[8px] w-[95%] h-[95%] max-md:w-[83px] max-md:h-[90px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Image and Hover Effect */}
                        <div className="relative max-md:w-[95.18px] max-md:h-[95.18px] p-[4px] cursor-pointer">
                            <Image
                                src={itms.src}
                                alt="influencer"
                                width={267}
                                height={268}
                                className="rounded-full w-full h-full  object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            {/* Name and Icon on Hover */}
                            <div className="flex text-lg max-md:text-[10px] gap-2 items-center justify-center absolute top-[70%] max-md:top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl px-3 md:py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="font-bold text-black">{itms.title}</h1>
                                <MdArrowOutward className="text-black" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Influencers;




