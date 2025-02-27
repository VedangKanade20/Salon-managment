const Home = () => {
  return (
    // flex direction col
    <div className="flex-col">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">
              Tip Top Family Salon
            </h1>
            <h3 className="mb-5 font-bold text-3xl">
              Hairstyle magic happens here!!
            </h3>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-white font-semibold">
                Professional services
              </h3>
              <p className="text-white text-3xl font-semibold sm:text-4xl">
                Transform Your Look with Our Expert Stylists
              </p>
              <p className="mt-3 text-white">
                At [Saloon Name], we believe that every haircut, shave, or
                styling session is an opportunity to help you feel confident and
                refreshed. Whether you're looking for a classic cut, a modern
                style, or a relaxing grooming experience, our team of
                professionals is here to make it happen. Step into our saloon
                and leave feeling like the best version of yourself.
              </p>
              <a
                href="/about"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4th section */}
      <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-8">
        <div className="max-w-xl">
          <div className="py-4">
            <h3 className="text-3xl text-white font-semibold md:text-4xl">
              Fabulous hairdressing starts{" "}
              <span className="text-indigo-600">here</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3 text-xl">
              We have the best methodologies in hair care
            </p>
          </div>
          <a
            className="group px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
            href="./Contact"
          >
            Book an Appointment Now!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
