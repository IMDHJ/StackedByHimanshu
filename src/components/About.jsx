import React from 'react'
import ProfilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <div>
      {/* About */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-100 flex-shrink-0 mb-4 md:mb-0" >
            <img src={ProfilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
            <p className="mt-2 sm:mt-3 text-slate-600 w-full">I’m a software engineer focused on building scalable backend systems and polished frontends. I enjoy exploring quantitative ideas in the stock market and sharing learnings via blog posts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
