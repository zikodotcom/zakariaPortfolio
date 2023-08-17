import React from 'react'
import { BsLinkedin,BsGithub } from 'react-icons/bs';
export default function FooterC({footer,hero}) {
  return (
    <footer className='bg-black px-4 text-white pt-16 md:px-24'>
        <div className='flex flex-col items-start md:flex-row md:justify-between border-b-[1.5px] border-[#444] py-4'>
            <div className='md:w-[40%]'>
                <h1 className="text-xl  font-bold uppercase">Zakaria <span className="text-purpleViolet-100">Sdik</span></h1>
                <p className='font-normal'>
                    {hero.description}
                </p>
            </div>
            <div>
                <h6 className='text-2xl font-bold mb-5'>Social</h6>
                <ul className='flex'>
                    <li className='mr-3'><a className='text-xl' href="https://www.linkedin.com/in/zakaria-s-3b8088138/" target='_blank'><BsLinkedin/></a></li>
                    <li><a className='text-xl' href="https://github.com/zikodotcom" target='_blank'><BsGithub/></a></li>
                </ul>
            </div>
        </div>
        <div className='text-center p-2'>
            <p className='text-xs'>© Copyright 2023. {footer.copyright} <a className='border-b' href="https://www.linkedin.com/in/zakaria-s-3b8088138/" target='_blank'>Zakaria Sdik</a></p>
        </div>
    </footer>
  )
}
