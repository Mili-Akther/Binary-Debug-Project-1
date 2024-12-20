

const StatsSection = () => {
  return (
    <div className="relative bottom-[-100px] left-1/2 transform -translate-x-1/2 grid place-items-center mt-24">
      <section className="bg-zinc-900 text-center">
        <div className="grid grid-cols-4 gap-6 divide-x divide-gray-700 border border-gray-700 rounded-3xl px-10 p-2">
          <div>
            <h3 className="text-3xl text-white font-bold">500+</h3>
            <p className="text-white">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl text-white font-bold">40+</h3>
            <p className="text-white">Finished Projects</p>
          </div>
          <div>
            <h3 className="text-3xl text-white font-bold">50+</h3>
            <p className="text-white">Skilled Experts</p>
          </div>
          <div>
            <h3 className="text-3xl text-white font-bold">100</h3>
            <p className="text-white">Media Posts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
