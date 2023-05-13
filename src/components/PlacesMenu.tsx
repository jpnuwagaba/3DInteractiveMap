import React from 'react'

const PlacesMenu = () => {
  return (
    <div className='bg-white/90 w-full h-screen py-6 px-12'>
      <div className='flex flex-col items-center gap-16'>
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-xl">Colleges</div>
          <div className='flex flex-wrap gap-4 mt-5 font-bold'>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">CEDAT</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">COCIS</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">CONAS</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">CAES</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">LAW SCHOOL</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">CHINESE</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-xl">Halls</div>
          <div className='flex flex-wrap gap-4 mt-5 font-bold'>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">Livingstone Hall</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">University Hall</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">Nsibirwa Hall</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">Africa Hall</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">Mary Stuart Hall</div>
            <div className="bg-sky-100 px-3 py-2 rounded-full lg:text-lg cursor-pointer">Complex Hall</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesMenu