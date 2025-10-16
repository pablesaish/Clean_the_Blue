import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-[100vh] text-white py-16 px-6 bg-cover bg-center bg-no-repeat"
      style={{
            backgroundImage: `
            linear-gradient(
            rgba(112, 220, 226, 0.3)
            ), 
            url("/images/Beach_cleanup2.jpg")`   
          }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="mt-4 text-gray-500 md:text-5xl font-bold mb-6 tracking-wide py-20px">
          About <span className="text-cyan-600">Clean the Blue</span>
        </h2>

        {/* Cards Section grid-cols-1 md:grid-cols-3 */}
        <div className="grid md:grid-cols-3 gap-6 text-left"> 

          {/* Card 1 */}
          <div className="bg-slate-700/70 rounded-xl p-8 h-57 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-cyan-200/40 hover:shadow-1">
            <h3 className="text-2xl mb-3 text-cyan-200 font-bold">🌊 Our Mission</h3>
            <p className="text-gray-100 font-semibold text-[18px]">
              To restore marine life and coastal ecosystems by reducing plastic waste
              and spreading awareness about the importance of water bodies conservation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-700/70 rounded-xl p-8 h-57 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-cyan-200/40 hover:shadow-1">
            <h3 className="text-2xl mb-3 text-cyan-200 font-bold">🌊 Our Vision</h3>
            <p className="text-gray-100 font-semibold text-[18px]">
              To create a global network of ocean,river and other water bodies defenders who stand together for a
              cleaner and sustainable future for all living beings.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-700/70 rounded-xl p-8 h-57 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-cyan-200/40 hover:shadow-1">
            <h3 className="text-2xl mb-3 text-cyan-200 font-bold">🌊 Get Involved</h3>
            <p className="text-gray-100 font-semibold text-[18px] mb-10">
              Join our beach,river cleanups, donate, or volunteer with our environmental
              education programs — every action helps protect our planet.
            </p>
          </div>
        </div>
         
         <p className="mt-24 bg-gray-100/70 max-w-xl mx-auto text-lg  text-gray-700 drop-shadow-lg leading-relaxed mb-10 px-6 py-5 rounded-xl shadow-md border border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-700 font-bold">
                <strong className="text-cyan-800">Clean the Blue </strong> is a youth-driven initiative dedicated to protecting our oceans and beaches from pollution. 
              We raise awareness, organize community cleanups, and inspire people to take action for a cleaner, greener planet.
         </p>

        {/* Footer message */}
        <div className="mt-30">
          <h4 className="text-xl text-gray-100 font-bold text-[24px] font-sans italic">
            Together, we can keep the Earth <span className="text-cyan-400 text-[30px]">Clean & Blue </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
