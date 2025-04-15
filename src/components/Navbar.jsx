import React from 'react'
import navLogo from "../assets/navLogo.png";


function Navbar() {
  return (
    <div className=" flex items-center justify-center gap-30 text-white sticky top-0">
      <img src={navLogo} alt="logo" />
      <div className="flex gap-8">
        <a href="">
          <p>Home</p>
        </a>
        <a href="">
          <p>Explore</p>
        </a>
        <a href="">
          <p>About Us</p>
        </a>
        <a href="">
          <p>Contact Us</p>
        </a>
      </div>
      <div className="flex gap-10 ml-6">
        <a href="">
          <button class=" text-white w-[120px] h-10 rounded-xl cursor-pointer border-2">
            Log in
          </button>
        </a>
        <a href="">
          <button class="bg-[var(--primary)] text-white w-[120px] h-10 rounded-xl cursor-pointer">
            Create Account
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar