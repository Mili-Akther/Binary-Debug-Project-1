import webIcon from "../assets/Web Development icon.svg";
import graphicsIcon from "../assets/graphic icon fopr gallary.svg";
import videoIcon from "../assets/Video Editing  icon.svg";
import uiuxIcon from "../assets/UI ux icon for gallerry.svg";

// Card Component
const Card = ({ imgSrc, title, category, date, description }) => {
  return (
    <div className="card bg-black w-full max-w-md items-center flex flex-col border-gray-800 p-8 border-t-2 border-r-2 border-l-2 rounded-2xl">
      <div className="bg-gradient-to-t from-zinc-950 to-neutral-900 shadow-cyan-700 shadow-[0_0_28px_5px] border-2 border-cyan-600 rounded-2xl w-full h-64 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-28 h-auto" />
      </div>
      <button className="-mt-8 py-2 hover:bg-cyan-600 btn bg-black text-white font-light rounded-full flex items-center w-48 max-w-xs border-cyan-600 backdrop-blur-sm bg-gray-900/70">
        View Project Details
        <i className="fa-solid fa-arrow-right fa-rotate-by text-white inline-flex justify-center items-center"></i>
      </button>
      <div className="card-body w-full text-left mt-4 p-2 flex flex-col">
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <div className="flex justify-between text-sm font-thin mt-2">
          <h1>Category: {category}</h1>
          <h1>{date}</h1>
        </div>
        <p className="text-gray-400 mt-3 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Main Section
const OurWorks = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="py-32">
        <h3 className="text-6xl font-bold text-center mb-5 text-white">
          Our Works
        </h3>
        <p className="text-center mb-5 text-gray-500">
          Witness the brilliance of our previous projects. Our portfolio
          showcases the successful collaborations we've had with
          <br /> diverse clients across various industries. Let our work speak
          for itself.
        </p>
      </div>

      {/* Card Container */}
      <div className="flex items-center justify-center -mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 place-content-center place-items-center px-16">
          <Card
            imgSrc={webIcon}
            title="Modern Corporate Website"
            category="Web Development"
            date="January 2022"
            description="Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping."
          />
          <Card
            imgSrc={graphicsIcon}
            title="Creative Graphic Design"
            category="Graphic Design"
            date="February 2022"
            description="Explore our innovative graphic designs that breathe life into visual storytelling. Elevate your brand with our artistry."
          />
          <Card
            imgSrc={videoIcon}
            title="Dynamic Video Production"
            category="Video Production"
            date="March 2022"
            description="Discover our captivating video projects that tell stories through cinematic excellence and unparalleled creativity."
          />
          <Card
            imgSrc={uiuxIcon}
            title="Innovative UI/UX Design"
            category="UI/UX Design"
            date="April 2022"
            description="Transform user experiences with our UI/UX designs that blend aesthetics with functionality seamlessly."
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
