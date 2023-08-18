"use client"
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
export default function HeroC({hero, lang}) {
  return (
    <section id="home" className='hero h-[100vh] flex items-center'>
        <div className='w-full flex flex-col justify-end items-center'>
            <h2 className='text-6xl font-bold text-purpleViolet-100 text-center'>
                <Typewriter 
                    words={[hero.name,hero.age,hero.specialiste]}
                    cursor cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    loop={5}
                />
            </h2>
            <p className='w-[80%] md:w-[60%] text-center my-6 text-lg text-black-font'>
                {hero.description}
            </p>
            <Link target='_blank' href={lang === "fr" ? 'http://todoapp.lovestoblog.com/french_cv.pdf' : 'http://todoapp.lovestoblog.com/english_cv.pdf'} className='bg-purple-600 p-4 border text-white rounded-lg hover:bg-transparent hover:border-purple-700 hover:text-purple-700'>{hero.cv}</Link>
        </div>
    </section>
  )
}
