"use client"
import React from 'react'
import Header from "../Header/page"
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'





const Page = () => {
  const currentEvent = useSelector((state: any) => state.event.currentEvent[0]);



if (!currentEvent) {

  return (
    <div>
      <Header />
      <p>Loading...</p>
    </div>
  );
}
  
  
  return (
    <div>
    <Header />
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">{currentEvent.title}</h2>
          <p className="mt-4 text-gray-600">{currentEvent.eventDescription}</p>
          <p className="mt-4 text-gray-600">
            <strong>Location:</strong> {currentEvent.location}
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Address:</strong> {currentEvent.address}
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Hosted By:</strong> {currentEvent.hostedBy}
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Event Type:</strong> {currentEvent.eventType}
          </p>
          {currentEvent.isPaid && (
            <p className="mt-4 text-gray-600">
              <strong>Price:</strong> ₹{currentEvent.price}
            </p>
          )}
           <button  className="mt-8 inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"><Link href={"/Form"}>Book Event</Link></button>
        </div>

        <div className="relative mt-16 h-84 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-300">
        <Image
              alt=""
              src={currentEvent.eventThumbnail}
              className="absolute inset-0 h-full w-full object-cover"
              width={550}
              height={550}
            />
        </div>
      </div>
    </section>
  </div>
  )
}

export default Page
