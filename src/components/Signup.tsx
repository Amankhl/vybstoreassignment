'use client'

import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
      <section className='w-full h-[527px] max-md:h-[438px] flex flex-col gap-[25px]'>
          <h1 className="text-[#00dc82] leading-[40.8px] text-[34px] max-md:text-[20px] font-[700] text-center">
              How to get started?
          </h1>
          <div className='w-full h-[450px] flex flex-col items-center gap-[36px] text-white'>

              <div className='2xl:w-[840px]  h-[377px] max-md:h-[378px] rounded-[24px] p-[36px] max-md:p-[16px] bg-[#A94949] flex max-md:flex-col justify-center'>
                  <div className='flex max-md:flex-col max-md:justify-center items-center gap-[64px] max-md:gap-[24px]'>
                      <div className='w-[340px] max-md:w-[288px] h-[145px] max-md:h-[99px] flex flex-col max-md:items-start gap-[24px] max-md:gap-[16px]'>
                          <h3 className='text-[27px] max-md:text-[16px] font-[700] leading-[32.4px] max-md:leading-[19.2px]'>Sign Up and create your own store hassle-free.</h3>
                          <p className='text-[16px] max-md:text-[12px] font-[500] leading-[19.2px] max-md:leading-[14.52px]'>Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.</p>
                    </div>

                      <div className='w-[212px] max-md:w-[155px] h-[305px] max-md:h-[223px] bg-[#181818] rounded-[16px] p-[16px] gap-[16px] max-md:gap-[10px] flex flex-col items-center'>
                          <button className='w-[180px] max-md:w-[135px]  h-[33px] max-md:h-[27px] rounded-[8px] border-[1px] border-[#D9D9D9] px-[12px] py-[8px] flex gap-[10px] items-center justify-center text-[14px] max-md:text-[10px] leading-[16.8px] font-[700]'>
                          <FcGoogle />Login with google
                      </button>
                          <div className='w-[180px] max-md:w-[135px] h-[15px] flex items-center text-[12px] font-[500]'>
                          <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
                          OR
                          <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
                      </div>
                      <LoginForm />
                    </div>
                </div>
                </div>
                <div className='relative w-full flex justify-center max-md:hidden'>
              <div className='absolute 2xl:w-[840px] -z-10 h-[377px] rounded-[24px] p-[36px] bg-[#5ED46A] text-[#5ed46a] rotate-[1deg]'>
                      <div className='flex max-md:flex-col max-md:justify-center items-center gap-[64px] max-md:gap-[24px]'>
                          <div className='w-[340px] max-md:w-[288px] h-[145px] max-md:h-[99px] flex flex-col max-md:items-start gap-[24px] max-md:gap-[16px]'>
                              <h3 className='text-[27px] max-md:text-[16px] font-[700] leading-[32.4px] max-md:leading-[19.2px]'>Sign Up and create your own store hassle-free.</h3>
                              <p className='text-[16px] max-md:text-[12px] font-[500] leading-[19.2px] max-md:leading-[14.52px]'>Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.</p>
                          </div>

                          <div className='w-[212px] max-md:w-[155px] h-[305px] max-md:h-[223px]rounded-[16px] p-[16px] gap-[16px] max-md:gap-[10px] flex flex-col items-center'>
                              <button className='w-[180px] max-md:w-[135px]  h-[33px] max-md:h-[27px] '>
                              </button>
                              <div className='w-[180px] max-md:w-[135px] h-[15px] '>
                                  <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
                                  OR
                                  <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
                              </div>
                              <LoginForm />
                          </div>
                      </div>
                </div>
                </div>
        </div>
    </section>
  )
}

export default Signup;





import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"


const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "at least 8 characters long"),
})

export const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
        setLoading(true)
        setErrorMessage('')
        try {
            console.log(values)
        } catch {
            setErrorMessage('check your credentials.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" text-white flex flex-col max-md:text-[10px] items-center gap-[16px] max-md:gap-[3px]">
            <div className='flex flex-col  items-center justify-center w-[180px] max-md:w-[135px] h-[46px]'>
                <label className="text-[18px] max-md:text-[13px] font-[700] text-center">Email</label>
                <input
                    type="email"
                    {...register("email")}
                    className="bg-transparent outline-none border-b-2 border-[#A8A8A8] w-full max-md:-mt-1"
                />
                {errors.email && <p className="text-red-500 text-[7px]">{errors.email.message}</p>}
            </div>

            <div className='flex flex-col items-center w-[180px] max-md:w-[135px] h-[46px]'>
                <label className="text-[18px] max-md:text-[13px] font-[700] text-center">Password</label>
                <input
                    type="password"
                    {...register("password")}
                    className="bg-transparent outline-none border-b-2 border-[#A8A8A8] w-full max-md:-mt-1"
                />
                {errors.password && <p className="text-red-500 text-[7px]">{errors.password.message}</p>}
            </div>

            <div className="relative p-[1px] items-center md:mt-1 justify-center  rounded-[12px] bg-gradient-to-r to-[#FF5D5D] from-[#4794FF]">
                <button disabled={loading} type="submit" className="w-[80px] max-md:w-[60px] h-[38px] max-md:h-[16px] max-md:text-[10px] relative inline-flex items-center justify-center py-[16px] px-[24px] max-md:p-[10px] overflow-hidden font-semibold transition-all duration-200 ease-out rounded-[12px] bg-[#181818] group">
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r to-[#FF5D5D] from-[#4794ff]">
                        Login
                    </span>
                </button>
            </div>

            <div className="w-[190px] max-md:w-[135px] text-[12px] max-md:text-[7px] max-md:mt-1">
                <p className=" text-[#A8A8A8] text-center">Don't have an account? <span className='text-[#00DC82] underline'>Get Started</span></p>
            </div>
        </form>
    )
}

