const DigitalPresenceSection = () => {
  return (
    <section className="bg-zinc-900 p-24">
      <div className="py-12">
        <h3 className="text-4xl font-medium text-center mb-5 text-white">
          Ready to Transform Your Digital Presence?
        </h3>
        <p className="text-center mb-5 text-gray-500">
          Take the first step towards digital success with DigitX by your side.
          Our team of experts is eager to craft tailored solutions
          <br /> that drive growth for your business. Whether you need a
          stunning website, a powerful mobile app, or a data-driven marketing
          <br /> campaign, we've got you covered. Let's embark on this
          transformative journey together.
        </p>
      </div>

      {/* Unlock Button Section */}
      <div className="bg-zinc-900 text-white text-center">
        <h2 className="text-2xl font-thin mb-6 text-white">
          Unlock Your Digital Potential Today
        </h2>
        <div className="flex justify-center gap-4">
          {/* Get Started Button */}
          <a
            href="#get-started"
            className="bg-gray-800 text-cyan-600 py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300"
          >
            Get Started
          </a>
          {/* Free Consultation Button */}
          <a
            href="#free-consultation"
            className="bg-transparent border-2 border-cyan-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalPresenceSection;
