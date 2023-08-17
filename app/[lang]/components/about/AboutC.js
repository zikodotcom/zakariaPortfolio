import React from 'react'

export default function AboutC({about}) {
    const skills = ["HTML5", "CSS3", "JAVASCRIPT", "PHP", "SQL", "TAILWIND CSS", "BOOTSTRAP", "REACTJS", "NEXTJS", "JQUERY"]
  return (
    <section id="about" className='bg-gray-200 py-10 px-20'>
        <div className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-5xl'>{about.title}</h3>
            <div className='h-2 w-20 mt-6 bg-purpleViolet-100 rounded-lg'></div>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
            <div className='w-[100%] lg:w-[50%] mr-10'>
                <h4 className='font-bold text-xl'>{about.subtitle1}</h4>
                <p className='font-normal text-black-font my-10'>{about.aboutme}</p>
                <a href="#contact" className='bg-purple-600 p-4 border text-white rounded-lg hover:bg-transparent hover:border-purple-700 hover:text-purple-700'>CONTACT</a>
            </div>
            <div className='mt-5 lg:mt-0'>
                <h4 className='font-bold text-xl'>{about.subtitle2}</h4>
                <div className='flex flex-wrap mt-10'>
                    {
                        skills.map(el =>{
                            return (
                                <p className='p-3 m-2 text-[#666] rounded-3xl bg-rgb'>{el}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
