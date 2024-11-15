'use client';

import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import profile from '../../public/assets/profile.png'
import Image from 'next/image';
import { RiEditBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import Link from 'next/link';

const MobileDropDown = ({ setMobileDropDown, mobileDropDown }: { setMobileDropDown: any; mobileDropDown: boolean }) => {

    const toggleDropdown = () => {
        setMobileDropDown(!mobileDropDown);
    };

    return (
        <div className="relative">
            {
                mobileDropDown &&
                <>
                    <button className='h-[24px] w-[24px] absolute right-[2.8px] top-6 z-[100]' onClick={toggleDropdown}>
                        <MdClose className="w-full text-white" />
                    </button>
                    <div className='absolute right-0 top-6 p-[24px] bg-[#181818] w-[180px] h-[396px] text-white shadow-lg z-40 space-y-[36px]'>
                        <div className='w-full h-[293px] space-y-[24px]'>

                            <div className='w-full h-[145px] flex flex-col gap-[8px]'>
                                <div className='w-full h-[94px] flex flex-col gap-[4px]'>
                                    <Image src={profile} alt="Profile" className='rounded-full h-[60px] w-[60px]' />
                                    <button className='w-full h-[30px] flex items-start gap-[4px] text-[#00DC82] text-[12px] hover:underline'>
                                        <RiEditBoxLine className='mt-[2.5px]' /><span className='text-left w-[113px]'>Change Profile Picture</span>
                                    </button>
                                </div>
                                <div className='w-full h-[43px] flex flex-col justify-between'>
                                    <h3 className='w-full h-[22px] text-[18px] font-semibold'>Samira Hadid</h3>
                                    <h3 className='w-full h-[17px] text-[14px] font-medium'>@samirahadid</h3>
                                </div>
                            </div>

                            <div className='w-full h-[124px] flex flex-col gap-[16px]'>
                                <button className='w-full h-[19px]'>
                                    <Link href='/login' className='w-full h-full flex items-center gap-[11px]'><FaRegUser />Profile</Link>
                                </button>
                                <button className='w-full h-[19px] flex items-center gap-[11px]'>
                                    <CiLocationOn />Address
                                </button>
                                <button className='w-full h-[19px] flex items-center gap-[11px]'>
                                    <SlEarphonesAlt />Contact us
                                </button>
                                <button className='w-full h-[19px] flex items-center gap-[11px]'>
                                    <CiCircleInfo />About us
                                </button>
                            </div>

                        </div>
                        <button className='w-full h-[19px] flex items-center justify-start gap-[11px] text-[16px]'>
                            <CiCircleInfo /> Logout
                        </button>
                    </div>
                </>

            }

        </div>
    )
}

export default MobileDropDown