import React from 'react'
import Navbar from './Navbar';

const hero = () => {
  return (
    <section class="bg-[url(./assets/heroBg.jpg)]">
      <div className="bg-[#0000008D]">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-20 py-10 font-pop">
          <div className="font-extrabold text-7xl text-white  ">
            <p className="">Find Your Perfect Shortlet in Nigeria</p>
          </div>

          <div className="text-white text-3xl font-bold">
            <p>
              Discover comfortable and affordable Apartments in the heart of
              Nigeria's most vibrant cities.
            </p>
          </div>

          <div className="text-blach rounded-4xl w-[60%] px-5 py-3 bg-white flex gap-10 justify-between items-center  ">
            <div className="flex flex-col">
              <label for="location">Location</label>
              <select name="location" id="" class="text-gray-500 pr-5">
                <option value="">Select location</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label for="apartment">Apartment Type</label>
              <select name="apartment" id="" class="text-gray-500 pr-5">
                <option value="">Select type</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label for="beds">Number Of Beds</label>
              <select name="beds" id="" class="text-gray-500 pr-5">
                <option value="">Select type</option>
              </select>
            </div>

            <div class="flex h-1 items-center">
              <div class="relative ">
                <button class="w-[120px] h-8 text-white  bg-[var(--primary)] rounded-[20px] cursor-pointer">
                  Search
                </button>
                <div class="absolute inset-y-0 left0 pl-3 flex items-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    xmlns="https://www.google.com/maps/search/?api=1&query=,"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero