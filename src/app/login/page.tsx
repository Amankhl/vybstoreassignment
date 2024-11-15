'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import LoginImg from '../../../public/assets/Group785.png'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "At least 8 characters long").regex(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character"),
})


const Login = () => {
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
    <main className="w-full flex justify-center">
      <section className='lg:h-[634.81px] w-[1080px] bg-[#000000] flex max-lg:flex-col max-lg:gap-[10px] max-lg:items-center rounded-[24px] p-[40px]'>
        
        <div className="w-[584px] h-[554.81px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px]">
          <Image src={LoginImg} alt="Image" className="w-full h-full"/>
        </div>


        <div className='w-[416px] h-[553px] max-lg:w-[300px] max-lg:h-[500px] bg-[#000] rounded-[16px] py-[24px] px-[36px] gap-[36px] max-lg:gap-[20px] text-white flex flex-col items-center'>
          <h1 className="font-[700] text-[40px] leading-[40px]">Login</h1>
          <button className='w-[344px] h-[46px] max-lg:w-[210px] rounded-[8px] border-[1px] border-[#D9D9D9] px-[16px] py-[12px] flex gap-[10px] items-center justify-center text-[18px] leading-[21.6px] font-[500]'>
              <FcGoogle />Login with google
            </button>
          <div className='w-[180px] h-[15px] flex items-center text-[16px] text-[#A8A8A8] font-[600]'>
              <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
              OR
              <div className='w-[85px] border-[#A8A8A8] border-[1px]'></div>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" text-white flex flex-col items-center gap-[36px]">
            <div className='flex flex-col  items-center justify-center w-[364px] max-lg:w-[200px] h-[50px]'>
                <input
                  type="email"
                  {...register("email")}
                className="bg-transparent outline-none py-[12px] px-[8px] placeholder-white border-b-2 text-[22px] font-[700] leading-[26.4px] border-[#A8A8A8] w-[364px] max-lg:w-[200px]"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-[13px]">{errors.email.message}</p>}
              </div>

            <div className='flex flex-col items-center w-[364px] max-lg:w-[200px] h-[50px]'>
                <input
                  type="password"
                  {...register("password")}
                className="bg-transparent outline-none py-[12px] px-[8px] placeholder-white border-b-2 text-[22px] font-[700] leading-[26.4px] border-[#A8A8A8] w-[364px] max-lg:w-[200px]"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-[13px]">{errors.password.message}</p>}
              </div>

              <div className="relative p-[1px] items-center mt-1 justify-center rounded-[18px] bg-gradient-to-r to-[#FF5D5D] from-[#4794FF]">
              <button disabled={loading} type="submit" className="w-[142px] max-lg:w-[100px] h-[54px] max-lg:h-[40px] relative inline-flex items-center justify-center py-[16px] px-[24px] overflow-hidden  font-semibold transition-all duration-200 ease-out rounded-[18px] bg-[#000] group">
                <span className="relative text-[18px] text-transparent bg-clip-text bg-gradient-to-r to-[#FF5D5D] from-[#4794ff]">
                    Login
                  </span>
                </button>
              </div>

            <div className="w-full text-[22px] max-lg:text-[12px]">
                <p className=" text-[#A8A8A8] text-center">Don't have an account? <span className='text-[#00DC82] underline cursor-pointer'>Get Started</span></p>
              </div>
            </form>
          </div>

      </section>
    </main>
  )
}

export default Login