import Link from 'next/link'
import React from 'react'

const WebDropDown = () => {
  return (
      <div className="bg-black text-[16px] rounded-[15px] w-[147px] h-[177px] text-white absolute right-[7.5rem] max-2xl:right-[1.8rem] top-28 max-2xl:top-[5.55rem] justify-center">
          <p className="w-full h-[60px] flex items-center py-[7px] px-[17px] font-medium "><Link href='/login'>Profile</Link></p>
          <p className="w-full h-[60px] flex items-center py-[7px] px-[17px] font-medium ">Dashboard</p>
          <p className="w-full h-[60px] flex items-center py-[7px] px-[17px] font-medium ">My Store</p>
      </div>
  )
}

export default WebDropDown