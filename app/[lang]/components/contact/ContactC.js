import axios from "axios"


export default function ContactC({contact}) {
    async function sendMessage(e){
        "use server"

            let subject = `A message sent 'from' ${e.get("name")?.toString()} with email ${e.get("email")?.toString()}`
            let body =  e.get("body")?.toString()
        
        let res = await axios.post("http://localhost/api_mail_send/",{subject, body})
        .then(res =>{
            console.log(res.data)
        })
    }
  return (
    <section id="contact" className='hero py-10 px-20'>
        <div className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-5xl'>Contact</h3>
            <div className='h-2 w-20 mt-6 bg-purpleViolet-100 rounded-lg'></div>
        </div>
        <div className='flex flex-col items-center w-full mt-5'>
            <form action={sendMessage} className='bg-white shadow-sm rounded-md p-4'>
                <div className='flex flex-col'>
                    <label>{contact.title1}</label>
                    <input name="name" className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' type="text" placeholder={contact.placeholder1}/>
                </div>
                <div className='flex flex-col my-4'>
                    <label>{contact.title2}</label>
                    <input name="email" className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' type="text" placeholder={contact.placeholder2}/>
                </div>
                <div className='flex flex-col'>
                    <label>{contact.title3}</label>
                    <textarea name="body" placeholder={contact.placeholder3} className='w-[300px] md:w-[500px] lg:min-w-[800px] outline-none bg-gray-300 text-[#333] p-2' cols="30" rows="10"></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className='bg-purple-600 p-4 border text-white rounded-lg hover:bg-transparent hover:border-purple-700 hover:text-purple-700 mt-4'>Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}
