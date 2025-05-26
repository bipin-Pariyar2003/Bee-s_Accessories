import React from "react";
import roundedLogo from "/images/rounded-logo.png";
const Banner = () => {
  const emailField = (
    <>
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="email" placeholder="mail@site.com" required />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>
    </>
  );
  return (
    <>
      <div className="max-w-screen-2xl mt-10 container mx-auto px-4 md:px-20 flex flex-col md:flex-row">
        {/* left div  */}

        <div className="w-full order-2 md: order-1 md:w-1/2 mt-8 md:mt-32 ">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl ">
              {" "}
              Unveiling Style, <span className="text-pink-500">Redefined✨</span>
            </h1>
            <h1 className="text-2xl">Worldwide Delivery🌍</h1>
            <h1 className="text-2xl"> Online Based from Kathmandu, Nepal📍</h1>
            <h1> No Exchange | No Refund</h1>
            {emailField}
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        {/* right div  */}
        <div className="w-20 md:w-1/2 mt-8 md:mt-20 order-1 md:order-2 justify-center">
          <img src={roundedLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
