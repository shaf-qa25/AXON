import React from 'react'
import { NavLink } from 'react-router-dom'
import { Briefcase, Search } from 'lucide-react';


const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-[100] bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:rotate-12 transition-transform">
                        <Briefcase className="text-white w-6 h-6" />
                    </div>
                    <span className="text-white font-bold text-2xl tracking-tighter">
                        ZERO<span className="text-blue-500">IN</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group">
                        Find Jobs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group">
                        Companies
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group">
                        Salaries
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-gray-400 hover:text-white text-sm font-medium px-4">
                        Log In
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                        Post a Job
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Header