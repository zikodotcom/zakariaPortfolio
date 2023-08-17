import React from 'react'

export default function ProjectC({projects}) {
  return (
    <section id="projects" className='py-10 px-20'>
        <div className='flex flex-col items-center'>
          <h3 className='text-center font-bold text-5xl'>{projects.title}</h3>
          <div className='h-2 w-20 mt-6 bg-purpleViolet-100 rounded-lg'></div>
      </div>
      {
        projects.project.map(el=>{
          return (
            <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
              <div className='md:w-[60%] w-[100%]'>
                <img className='' src={el.picture} alt=""/>
              </div>
              <div className='w-[100%] text-center md:text-left md:w-[38%]'>
                <h5 className="font-bold text-xl">{el.title}</h5>
                <p className='mt-5'>
                  {el.description}
                </p>
                <ul className='my-5'>
                    {"login" in el ? (<>
                      <li><span>Login : {el.login}</span></li>
                      <li><span>Password: {el.pass}</span></li>
                      </>
                    ) : ''}
                  </ul>
                <a href={el.link} target='_blank' className='bg-purple-600 px-4 py-3 border text-white rounded-lg hover:bg-transparent hover:border-purple-700 hover:text-purple-700 mt-5'>{el.btn}</a>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
