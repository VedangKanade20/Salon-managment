import { FaCut, FaStar, FaMagic, FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#0f172a] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_salon_bg_1778786673852.png"
            alt="Salon Interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/80 to-[#0f172a]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <FaMagic className="text-amber-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-amber-200">Premium Family Salon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Elevate Your Style at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              Tip Top Salon
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Experience the art of grooming. Where classic techniques meet modern trends in a luxurious atmosphere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2">
              Book Appointment <FaArrowRight />
            </a>
            <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg transition-all duration-300">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-sky-500 opacity-20 blur-2xl rounded-full"></div>
              <img
                src="/professional_stylist_1778786695768.png"
                className="relative rounded-2xl shadow-2xl object-cover h-[600px] w-full border border-white/10"
                alt="Professional Stylist"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-slate-800 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <FaStar className="text-amber-500 text-2xl" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">10+</p>
                    <p className="text-gray-400 font-medium">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-amber-400 font-semibold tracking-wider uppercase">
                <FaCut className="text-xl" />
                <span>Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Transform Your Look with Our Expert Stylists
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                At Tip Top Salon, we believe that every haircut, shave, or styling session is an opportunity to help you feel confident and refreshed. Whether you're looking for a classic cut, a modern style, or a relaxing grooming experience, our team of professionals is here to make it happen.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white">Precision Cuts</h4>
                  <p className="text-gray-400 text-sm">Tailored specifically to your features.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white">Premium Styling</h4>
                  <p className="text-gray-400 text-sm">Using only the finest luxury products.</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-lg transition-colors group"
                >
                  Discover our story
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products/Services Preview Section */}
      <section className="py-24 bg-slate-900/50 border-t border-white/5 relative overflow-hidden">
         {/* Decorative blobs */}
         <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <img
                src="/hair_care_products_1778786714574.png"
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full border border-white/10"
                alt="Premium Hair Care Products"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Fabulous hairdressing starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">here</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                We utilize the industry's most advanced methodologies and premium products to ensure your hair not only looks stunning but remains healthy and vibrant.
              </p>
              
              <ul className="space-y-4 py-6">
                {['Top-tier styling products', 'Customized hair treatments', 'Relaxing salon environment'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                      <FaMagic className="text-amber-400 text-xs" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book an Appointment
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
