import React from 'react'

const Features = () => {
  return (
    <div className="grid gap-4 justify-center font-pop">
      <p className="font-bold text-2xl mt-10 ">featured Accommodation</p>
      <p className=" text-[#0000009D] mb-4">
        Experience Comfort and Luxury in Every Stay
      </p>
      <div class="flex h-1 items-center">
        <div class="relative ">
          <button class="w-[370px] h-8  rounded-[20px] cursor-pointer border-1">
            Search for an apartment,packages, or add-one
          </button>
          <div class="absolute  inset-y-0 left0 pl-3 flex items-center">
            <svg
              class="w-5 h-5 text-black"
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
  );
}

export default Features