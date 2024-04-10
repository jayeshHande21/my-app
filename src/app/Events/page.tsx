import React from 'react'
import eventData from "@/Data/event.json"
import Header from "../Header/page"
import Testimonial from "../Testimonail/page"
import Footer from "../Footer/page"


const page = () => {
  return (
    <div>
 
        <Header/>
        <div className='flex flex-wrap justify-center '>
    {
        eventData.map((event)=>(
            <div>
                <article className="mt-20 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm lg:w-[540px] ">
  <img
    alt=""
    src={event.eventThumbnail}
    className=" ht-[12rem] w-[520px] object-cover"
  />

  <div className="p-4 sm:p-6 lg:w-[540px]">
    <a href="#">
      <h1 className="text-lg font-medium text-gray-900">
       {event.title}
      </h1>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {event.eventDescription}
    </p>

    <a href="/EventInfo" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>
                </div>
        ))
    }


        </div>
        <Testimonial/>
        <Footer/>

    </div>
  )
}

export default page
