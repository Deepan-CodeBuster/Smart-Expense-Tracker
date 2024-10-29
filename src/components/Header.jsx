import React from 'react'

function Header() {
  return (
    <>
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  mt-5 lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-600">
        Track you Expence Like Never Before
        
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Take control of your finance with our powerfull Smart Expence Tracker application
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Sign Up now
        </a>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Header
