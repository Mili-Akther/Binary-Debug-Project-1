// components/Hero.jsx

import leftImage from "../assets/hero section side .svg";
import rightImage from "../assets/hero section hony com.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center relative mt-64">
      {/* Image on the left */}
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <img
          src={leftImage}
          alt="Hero Section Side"
          className="w-96 -ml-28 -mt-24 object-cover drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        />
      </div>

      {/* Image on the right */}
      <div className="absolute top-0 right-0 w-3/2 h-full">
        <img
          src={rightImage}
          alt="Hero Section Side"
          className="w-96 ml-96 -mr-28 -mt-24 object-cover drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        />
      </div>

      <section className="relative text-center py-16 z-10">
        {/* Text Content */}
        <h2 className="text-3xl font-semibold text-white uppercase tracking-widest mt-15">
          Welcome To
        </h2>
        <h1 className="text-6xl font-bold text-cyan-400 mt-10 custom-font">
          BINARY DEBUG
        </h1>
        <p className="text-2xl text-gray-300 uppercase mt-10">
          Redefining Businesses with IT Services <br /> Services
        </p>
      </section>

      {/* Background Circle */}
      <div className="absolute shadow-[0_-20px_30px_0_rgba(0,255,255,0.5)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[515px] h-[515px] bg-black-500 rounded-full z-0"></div>
    </div>
  );
};

export default Hero;
