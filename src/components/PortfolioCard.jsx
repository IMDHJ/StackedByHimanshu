import React from 'react'
import { motion } from "framer-motion";
import ProfilePic from '../assets/profile.jpg';
const PortfolioCard = () => {
  return (
      <div className="flex-1 flex justify-center md:justify-end">
            {/* Profile Card */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-56 md:w-64 lg:w-72 rounded-2xl bg-gradient-to-tr from-indigo-50 to-white shadow-lg p-6 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full bg-slate-200 mb-4">
                <img src={ProfilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Himanshu Jain</div>
                <div className="text-sm text-slate-500">Software Engineer</div>
              </div>
              <div className="mt-4 w-full text-center text-xs text-slate-500">9+ years · React · .NET · SQL</div>
            </motion.div>
          </div>
  )
}

export default PortfolioCard
