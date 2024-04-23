"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header/page"
// import { sendMail } from '@/lib/mail';


const Page = () => {
 

    
    const handleButton = async ()=>{
      
      // await sendMail({
      //   to: "jayeshhande00@gmail.com",
      //   name: "Jayesh",
      //   subject: "Test Mail",
      //   body: '<h1>You Successfully Register for the Event</h1>'
      // });

     
        
        toast.success('Form Submitted', {
            autoClose: 1000, 
          });
          
    }   
     
  return (
    <div>
     <Header/>    
    <section className="bg-gray-100">
  <div className="mx-auto mt-40 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        We appreciate your interest in joining us! Rest assured, your details are securely stored with us.
            As an organization, we prioritize your satisfaction and strive to provide you with the best experience possible. 

           
        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

          <address className="mt-2 not-italic">282 Shivaji Nagar, Pune, IND 58517</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

        

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
              placeholder="Message"
              
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              onClick={()=>handleButton()}
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<ToastContainer />
    </div>
  )
}

export default Page
