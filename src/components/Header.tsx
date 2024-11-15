'use client'

import React, { useState } from 'react'
import { PiUserCircleDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileDropDown from './MobileDropDown';
import WebDropDown from './WebDropDown';
import { useRouter } from 'next/navigation';

const Header = () => {

  const router = useRouter()

  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [mobileDropDown, setMobileDropDown] = useState<boolean>(false)

  return (
    <header className='w-full h-[63px] flex-center'>
      <div className='flex-center gap-[22px]'>
        <div className="flex h-full items-center -space-x-[2px] text-white cursor-pointer" onClick={() => router.push('/')}>
          <span className="text-6xl max-lg:text-[3rem] font-black ">V</span>
          <div className="flex flex-col lg:-space-y-2 max-lg:gap-[1px] items-center font-semibold">
            <span className="text-[39px] max-lg:text-[32px] -top-[2px] max-lg:top-[0.3px] relative">YB</span>
            <span className=" text-[12px] max-lg:text-[8px] relative bottom-[9px] max-lg:bottom-[10px]">STORE</span>
          </div>
        </div>

        <div className='nav-search mobile-search z-50'>
          <CiSearch className='searchicon' style={{ width: '53px', height: '25px' }} />
          <input type="text" placeholder='Search Creator/Product' className='max-lg:hidden' />
          <input type="text" placeholder='Search Creator' className='lg:hidden' />
        </div>
      </div>

      <div className='nav-links'>
        <h3>For Creators</h3>
        <h3>Merchandise</h3>
        <h3>Brand</h3>
        <h3>Digital</h3>
      </div>

      <div className='nav-button max-md:hidden' onClick={() => setDropOpen(!dropOpen)}>
        <PiUserCircleDuotone style={{ width: '53px', height: '25px' }} />
        <HiOutlineChevronDown style={{ width: '53px', height: '25px' }} />
        {dropOpen && (<WebDropDown />)}
      </div>

      <div className='md:hidden cursor-pointer z-50' onClick={() => setMobileDropDown(!mobileDropDown)}>
        <RxHamburgerMenu style={{ width: '55px', height: '25px', color: 'white' }} />
        {mobileDropDown && <MobileDropDown mobileDropDown={mobileDropDown} setMobileDropDown={setMobileDropDown} />}
      </div>

    </header>
  )
}

export default Header