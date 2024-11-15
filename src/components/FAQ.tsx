'use client'


const FAQ = () => {
    return (
        <section className='2xl:w-[1171px] w-full h-[620px] max-md:h-[802px] bg-[#181818] pt-[38px] flex max-md:flex-col gap-[36px] max-md:gap-[16px] items-center'>
          <div className='w-[516px] max-md:w-full h-[164px] flex gap-[16px] font-[700] flex-col items-start'>
                <h1 className='leading-[40.8px] max-md:text-center text-[34px] max-md:text-[24px] text-[#00DC82]'>FREQUENTLY ASKED QUESTIONS</h1>
                <p className='leading-[21.6px] max-md:text-center text-[18px] max-md:text-[16px] max-md:font-[500] text-white'>Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for?
                  Check out our full documentation</p>
        </div>
            <div className='h-full max-md:h-[674px] w-[619px] max-md:w-full flex flex-col gap-[16px]'>
            {
                    [
                        'How much does it cost to set up a store?',
                        'What kind of digital products can I sell?',
                        'Do I need technical skills to use the platform?',
                        'Is there a limit to the number of products I can list?',
                        'How do I receive payments for my sales?',
                        'Can I sell internationally on this marketplace?',
                        'What support and resources are available for sellers?',
                        'Is there a review process for uploaded products?'
                    ].map((ques, id)=>(
                        <FAQs key={id} ques={ques}/>
                    ))
            }
        </div>
    </section>
  )
}

export default FAQ


import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

export const FAQs = ({ ques }: { ques : string}) =>{
    const [toggle, setToggle] = useState<boolean>(false)

    const handleToggle =() =>{
        setToggle(!toggle)
    }

    return (
        <div className={`2xl:w-[619px]  ${toggle ? '2xl:h-[134px] max-md:h-[184px]' : '2xl:h-[48px] max-md:h-[62px]'} bg-white py-[14px] px-[20px] max-md:p[16px] rounded-[16px] text-black leading-[19.2px] space-y-[14px] text-[16px] max-md:text-[14px] font-[700] transition-all ease-in-out duration-75`}>
            <div className=' rounded-[16px] flex gap-[20px] max-md:gap-[16px] justify-between'>
            <p>{ques}</p>
                {toggle ? <LuMinus className='w-[20px] h-[20px] cursor-pointer' onClick={handleToggle} /> :
                <FiPlus className='w-[20px] h-[20px] cursor-pointer' onClick={handleToggle}/>
                }
            </div>
            {
                toggle && 
                (<div className='w-full space-y-[14px]'>
                    <div className='h-[1px] 2xl:w-[579px] max-md:w-[295px] border'></div>
                    <div className='2xl:w-[579px] 2xl:h-[57px] max-md:w-[295px]'>
                        <p className='max-md:font-[500]'>No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!</p>
            </div>
            </div>)
            }
        </div>
    )
}