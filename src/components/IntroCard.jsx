import React from 'react'
import PortfolioCard from './PortfolioCard';
import { motion } from "framer-motion";
import { ResumeURL } from '../constants';
const IntroCard = () => {
  return (

      <section className="w-full px-6 md:px-8 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="mr-3">👋</span>
              Hi, I’m <span className="text-indigo-600">Himanshu Jain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-lg text-slate-600 w-full"
            >
              Software engineer, stock-market enthusiast, and tech writer. I build reliable systems and write about trading & engineering.
            </motion.p>

            <motion.div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <a href={ResumeURL} download className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg">Download CV</a>
              <a href="#contact" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-lg hover:bg-indigo-50">Contact</a>
            </motion.div>
          </div>

          <PortfolioCard/>
        </section>

  )
}

export default IntroCard
