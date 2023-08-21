"use client"
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function ContactC({contact}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")

    useEffect(()=>{
        emailjs.init("sagzQODbsZGdjKpqH");

    },[])
    const handleChange = (e, setChange)=>{
        setChange(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const serviceId = "service_ik9q0ao";
        const templeteId = "template_3zdgiud"
        try {
            emailjs.send(serviceId,templeteId,{
                email,name,body
            })
            toast.success(contact.alertMsg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setBody("")
                setEmail("")
                setName("")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    
    <section id="contact" className='hero py-10 px-20'>
        <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* Same as */}
    <ToastContainer />
        <div className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-5xl'>Contact</h3>
            <div className='h-2 w-20 mt-6 bg-purpleViolet-100 rounded-lg'></div>
        </div>
        <div className='flex flex-col items-center w-full mt-5'>
            <form onSubmit={handleSubmit} className='bg-white shadow-sm rounded-md p-4'>
                <div className='flex flex-col'>
                    <label>{contact.title1}</label>
                    <input name="name" 
                    className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' 
                    type="text" 
                    placeholder={contact.placeholder1}
                    value={name}
                    onChange={(e)=> handleChange(e, setName)}
                    />
                </div>
                <div className='flex flex-col my-4'>
                    <label>{contact.title2}</label>
                    <input name="email" 
                    className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' 
                    type="text" 
                    placeholder={contact.placeholder2}
                    value={email}
                    onChange={(e)=> handleChange(e, setEmail)}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>{contact.title3}</label>
                    <textarea name="body" 
                    value={body}
                    placeholder={contact.placeholder3} 
                    className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' 
                    cols="30" rows="10"
                    onChange={(e)=> handleChange(e, setBody)}
                    ></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className='bg-purple-600 p-4 border text-white rounded-lg hover:bg-transparent hover:border-purple-700 hover:text-purple-700 mt-4'>Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}
