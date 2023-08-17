"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


export default function HeaderC({navigation}) {
    const [resp, setResp] = useState(false)
    const resP = ()=>{
        setResp(!resp)
    }
  return (
    <>
        <header className="flex justify-between items-center p-6 shadow-lg fixed w-full bg-white">
            <div>
                <h1 className="text-xl text-black-font font-bold uppercase">Zakaria <span className="text-purpleViolet-100">Sdik</span></h1>
            </div>
            <div className="hidden md:flex ">
                <nav>
                    <ul className="flex">
                    {navigation.map(el => {
                            return (
                                <li className="ml-10 text-lg text-black-font font-bold uppercase hover:text-purpleViolet-100 hover:scale-110">
                                    <a className="" href={el.id}>{el.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li className="flex items-center p-1">
                            <Link className="ml-2" href='/en'><img className="h-4 w-6" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" /></Link>
                            {" "}
                            <Link className="ml-2" href='/fr'><img className="h-4 w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/800px-Flag_of_France.png"  alt="" /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="block md:hidden" onClick={() => resP()}>
                <button className='ease-in-out duration-700'>{resp ? (<AiOutlineClose />) : (<GiHamburgerMenu/>)}</button>
            </div>
        </header>
        <div className={`w-full fixed top-[76px] bg-white shadow-lg p-0 ease-in-out duration-300 origin-top ${resp ? 'scale-y-100' : 'scale-y-0'}`}>
            <nav className="w-full">
                <ul className="flex flex-col">
                {navigation.map(el => {
                        return (
                            <li className="text-lg text-black-font font-bold uppercase border-b text-right p-4">
                                <a href={el.id}>{el.name}</a>
                            </li>
                        )
                    })}
                    <li className='p-4'>
                        <ul className='flex flex-col items-end'>
                            <li className="flex items-center p-1">
                                <Link className="ml-2" href='/en'><img className="h-4 w-6" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" /></Link>
                                {"    "}
                                <Link className="ml-2" href='/fr'><img className="h-4 w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/800px-Flag_of_France.png"  alt="" /></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
    </div>
    </>
  )
}
