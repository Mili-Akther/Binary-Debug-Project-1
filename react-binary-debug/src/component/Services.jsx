const Services = () => {
  return (
    <section className="bg-black">
      <div className="py-12">
        <h3 className="text-6xl font-bold text-center mb-5 text-white">
          Our Services
        </h3>
        <p className="text-center mb-5 text-gray-500">
          Our comprehensive range of services includes web design, mobile app
          development, SEO, social media
          <br />
          marketing, and more. Whether your a startup or an established
          enterprise, our experts will craft solutions
          <br />
          that drive results.
        </p>
      </div>

      <div className="flex items-center justify-center min-h-screen -mt-22 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-20">
          {/* Card 1 */}
          <div className="card w-96 max-w-4xl shadow-cyan-800 shadow-[0_0_25px_5px] border-4 border-cyan-600 bg-neutral-950 rounded-2xl">
            <figure className="px-10 pt-8">
              <img
                src="Assets/Web Development icon.svg"
                alt="Web Development Icon"
                className="mx-auto w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center px-6">
              <h2 className="card-title text-xl font-semibold text-white mb-2 uppercase">
                Web Development
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase mt-6 px-2">
                We build web solutions from sleek websites to complex platforms
                that are fast, responsive, and tailored to help you achieve your
                business goals.
              </p>
              <div className="card-actions">
                <button className="btn bg-black font-light text-white rounded-full flex items-center px-4 py-2 w-48 h-16 border-gray-500 hover:bg-cyan-600">
                  Learn More
                  <i className="fa-solid fa-arrow-right fa-rotate-by w-12 h-8 bg-gray-500 rounded-3xl text-white inline-flex justify-center items-center ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card w-96 max-w-4xl shadow-cyan-800 shadow-[0_0_25px_5px] border-4 border-cyan-600 bg-neutral-950 rounded-2xl">
            <figure className="px-10 pt-8">
              <img
                src="Assets/Video Editing icon.svg"
                alt="Video Editing Icon"
                className="mx-auto w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center px-6">
              <h2 className="card-title text-xl font-semibold text-white mb-4 uppercase">
                Video Editing
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase mt-4">
                With our video editing services, we take your raw footage and
                turn it into polished, eye-catching content that tells your
                story and keeps your audience hooked.
              </p>
              <div className="card-actions">
                <button className="btn bg-black font-light text-white rounded-full flex items-center px-4 py-2 w-48 h-16 border-gray-500 hover:bg-cyan-600 mt-6">
                  Learn More
                  <i className="fa-solid fa-arrow-right fa-rotate-by w-12 h-8 bg-gray-500 rounded-3xl text-white inline-flex justify-center items-center ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card w-96 max-w-4xl shadow-cyan-800 shadow-[0_0_25px_5px] border-4 border-cyan-600 bg-neutral-950 rounded-2xl">
            <figure className="px-10 pt-8">
              <img
                src="Assets/Graphics Design.svg"
                alt="Graphics Icon"
                className="mx-auto w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center px-6">
              <h2 className="card-title text-xl font-semibold text-white mb-4">
                Graphics Design
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase mt-4">
                Our striking visuals help you communicate effectively across
                digital and print media and capture your brand’s essence.
              </p>
              <div className="card-actions">
                <button className="btn bg-black font-light text-white rounded-full flex items-center px-4 py-2 w-48 h-16 border-gray-500 hover:bg-cyan-600 mt-6">
                  Learn More
                  <i className="fa-solid fa-arrow-right fa-rotate-by w-12 h-8 bg-gray-500 rounded-3xl text-white inline-flex justify-center items-center ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card w-96 max-w-4xl shadow-cyan-800 shadow-[0_0_25px_5px] border-4 border-cyan-600 bg-neutral-950 rounded-2xl">
            <figure className="px-10 pt-8">
              <img
                src="Assets/UI UX Design.svg"
                alt="UI/UX Icon"
                className="mx-auto w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center px-6">
              <h2 className="card-title text-xl font-semibold text-white mb-4">
                UI/UX Design
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase -mt-6 px-2 p-4">
                Our clean, intuitive interfaces are not only pretty, they are
                easy for your users to navigate, ensuring a smooth and engaging
                experience.
              </p>
              <div className="card-actions">
                <button className="btn bg-black font-light text-white rounded-full flex items-center px-4 w-48 h-16 border-gray-500 hover:bg-cyan-600 -mt-8">
                  Learn More
                  <i className="fa-solid fa-arrow-right fa-rotate-by w-12 h-8 bg-gray-500 rounded-3xl text-white inline-flex justify-center items-center ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card w-96 max-w-4xl shadow-cyan-800 shadow-[0_0_25px_5px] border-4 border-cyan-600 bg-neutral-950 rounded-2xl">
            <figure className="px-10 pt-8">
              <img
                src="Assets/SEO.svg"
                alt="SEO Icon"
                className="mx-auto w-24 h-24"
              />
            </figure>
            <div className="card-body items-center text-center px-6">
              <h2 className="card-title text-4xl font-semibold text-white mb-4">
                SEO
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase mt-4">
                Our SEO expertise will enable your website to climb the search
                rankings and increase visibility and organic traffic to your
                business.
              </p>
              <div className="card-actions">
                <button className="btn bg-black font-light text-white rounded-full flex items-center px-4 py-2 w-48 h-16 border-gray-500 hover:bg-cyan-600 mt-6">
                  Learn More
                  <i className="fa-solid fa-arrow-right fa-rotate-by w-12 h-8 bg-gray-500 rounded-3xl text-white inline-flex justify-center items-center ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
