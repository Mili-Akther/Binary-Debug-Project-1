import React, { useEffect } from "react";

const Testimonials = () => {
  const moveCarousel = (direction) => {
    const carousel = document.getElementById("carousel");
    const firstCard = carousel.firstElementChild;
    const cardWidth = firstCard.offsetWidth + 32; // Card width + gap
    const testimonialsLength = carousel.children.length;

    // Apply translation for smooth scrolling
    carousel.style.transition = "transform 0.3s ease-in-out";

    if (direction === "left") {
      carousel.style.transform = `translateX(${cardWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        carousel.appendChild(firstCard);
      }, 300);
    } else if (direction === "right") {
      carousel.style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        carousel.prepend(carousel.lastElementChild);
      }, 300);
    }
  };

  useEffect(() => {
    // Initial setup, if needed (like event listeners or other effects)
  }, []);

  return (
    <section className="bg-black">
      <div className="py-12">
        <h3 className="text-6xl font-bold text-center mb-5 text-white">
          Our Testimonials
        </h3>
        <p className="text-center mb-5 text-gray-500">
          Got questions? We've got answers. Check out our frequently asked
          questions section to <br />
          find valuable insights into our processes, pricing, and more.
          Transparency is at the core of <br />
          our client interactions.
        </p>
      </div>

      {/* Card Start */}
      <div className="bg-black py-12 px-6">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden max-w-full relative">
          {/* Scrollable Carousel */}
          <div
            id="carousel"
            className="flex gap-8 transition-transform duration-300"
          >
            {/* Card 1 */}
            <div className="carousel-card bg-zinc-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] cursor-pointer bg-gradient-to-t from-black to-zinc-900 border border-gray-800">
              <i className="fa-brands fa-facebook-f text-white border border-gray-800 p-4 py-3 text-2xl rounded-lg bg-zinc-900"></i>
              <p className="text-gray-300 mt-4">
                Working with DigitX was a pleasure. Their web design team
                created a stunning website that perfectly captured our brand's
                essence. The feedback from our customers has been overwhelmingly
                positive.
              </p>
              <div className="flex items-center mt-6">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Mark Roberts"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Mark Roberts</h4>
                  <p className="text-sm text-gray-400">
                    Founder of GreenEarth Eco Store
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="carousel-card bg-zinc-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] cursor-pointer bg-gradient-to-t from-black to-zinc-900 border border-gray-800">
              <i className="fa-brands fa-linkedin text-white border border-gray-800 p-4 py-3 text-2xl rounded-lg bg-zinc-900"></i>
              <p className="text-gray-300 mt-4">
                The mobile app DigitX developed for us exceeded our
                expectations. Its user-friendly interface and seamless
                functionality have earned us rave reviews from our users.
              </p>
              <div className="flex items-center mt-6">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Lisa Williams"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Lisa Williams</h4>
                  <p className="text-sm text-gray-400">
                    Head of Product at HealthTech Innovations
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="carousel-card bg-zinc-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] cursor-pointer bg-gradient-to-t from-black to-zinc-900 border border-gray-800">
              <i className="fa-solid fa-xmark text-white border border-gray-800 p-4 py-3 text-2xl rounded-lg bg-zinc-900"></i>
              <p className="text-gray-300 mt-4">
                DigitX transformed our ideas into reality with their expertise
                in modern, responsive designs. Their attention to detail and
                amazing support made the entire process hassle-free.
              </p>
              <div className="flex items-center mt-6">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Michael Johnson"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Michael Johnson</h4>
                  <p className="text-sm text-gray-400">Marketing Lead</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="carousel-card bg-zinc-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-[90%] md:w-[45%] lg:w-[30%] cursor-pointer bg-gradient-to-t from-black to-zinc-900 border border-gray-800">
              <i className="fa-solid fa-star text-yellow-400 border border-gray-800 p-4 py-3 text-2xl rounded-lg bg-zinc-900"></i>
              <p className="text-gray-300 mt-4">
                Our partnership with DigitX brought fantastic results. Their
                team delivered a beautifully designed product that captured our
                brand's vision perfectly.
              </p>
              <div className="flex items-center mt-6">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Sarah Connor"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Sarah Connor</h4>
                  <p className="text-sm text-gray-400">CEO at Innovatech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left and Right Arrows */}
          <button
            id="prevArrow"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full focus:outline-none hover:bg-gray-700"
            onClick={() => moveCarousel("left")}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            id="nextArrow"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full focus:outline-none hover:bg-gray-700"
            onClick={() => moveCarousel("right")}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
