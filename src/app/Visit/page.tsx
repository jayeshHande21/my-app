import Link from 'next/link'
import React from 'react'


const Page = () => {
  return (
    <div>
      <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Optimize Engagement.
        <strong className="font-extrabold text-red-700 sm:block"> Maximize Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Unlock Your Potential, Expand Your Horizons: Explore, Learn, Connect with Our Dynamic Events!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/Login"
        >
          <Link href={"/Login"}>Get Started</Link>
        </a>

      
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Page
