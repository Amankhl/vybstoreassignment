import Image from 'next/image'
import React from 'react'

const Features = () => {

    return (
        <section className="w-full 2xl:h-[748px]  flex max-lg:flex-col justify-between text-white max-lg:gap-4">
            <div className="flex justify-center items-center max-md:h-[48px]">
                <h1 className="text-[#00DC82] text-[40px] md:text-4xl font-[700] leading-[48px] text-center max-md:text-[1.5rem] max-md:leading-[2rem]" >From Creation to Monetization: Vyb Store Has It All</h1>
            </div>
            <div className='2xl:w-[726px] h-full flex justify-between items-center gap-[16px]'>
                <div className='w-[355px]  h-full max-md:h-[487px] flex flex-col gap-[16px] justify-center'>
                    {[
                        { title: "Trusted By Influencers", info: 'A trusted platform for influencers to grow and earn.', img: "/assets/illustration/d.png", height: '366', mdheight: '251' },
                        { title: "Authentic Payment Partner", info: 'Reliable, fast, and secure payments you can trust', img: "/assets/illustration/a.png", height: '366', mdheight: '228' },
                    ].map((itm, id) => (
                        <Card title={itm.title} info={itm.info} img={itm.img} key={id} height={itm.height} mdheight={itm.mdheight} />
                    ))}
                </div>
                <div className='h-[723px] w-[355px] max-md:h-[487px] flex flex-col gap-[16px] justify-center'>
                    {[
                        { title: "Secured Data", info: 'Advanced security measures to protect your valuable data', img: "/assets/illustration/c.png", height: '325', mdheight: '224' },
                        { title: "Monetize Your Influence", info: 'Seamlessly turn your influence into consistent revenue', img: "/assets/illustration/b.png", height: '382', mdheight: '257' },
                    ].map((itm, id) => (
                        <Card title={itm.title} info={itm.info} img={itm.img} key={id} height={itm.height} mdheight={itm.mdheight} />
                    ))}
                </div>
            </div>

        </section>
    )
}

const Card = ({ title, img, info, height, mdheight }: { title: string, img: string, info: string, height: string, mdheight: string }) => {
    const heightClass = height === '325' ? 'h-[325px]' : height === '366' ? 'h-[366px]' : 'h-[382px]';

    return (
        <div className={`bg-black max-w-sm max-md:gap-[16px] flex rounded-2xl flex-col items-center p-[24px] gap-[24px] 2xl:w-[355px] ${heightClass} `}>
            <div className='space-y-[8px]'>
                <h1 className="text-[34px] max-md:text-[16px] md:leading-10 font-bold md:w-72 leading-[34px] max-md:leading-[19.2px] text-center">
                {title}
            </h1>
                <p className="text-center text-[18px] max-md:text-[12px] max-w-xs md:text-base font-medium leading-[21.6px] max-md:leading-[14.52px] md:font-bold">
                {info}
            </p>
            </div>
            <Image src={img} alt="imaga" width={150} height={120} className="max-sm:size-[5rem] " />
        </div>
    );
};


export default Features