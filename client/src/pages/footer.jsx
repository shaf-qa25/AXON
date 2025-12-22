import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react' // Icons import kar lena

const Footer = () => {
    return (
        <footer className='w-full bg-[#020617] border-t border-white/10 pt-16 pb-8 px-6 md:px-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-start gap-12 mb-12'>
                    
                    <div className='flex flex-col gap-4 max-w-xs'>
                        <NavLink to="/" className="flex items-center group">
                            <div className='w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUkxxhrfhbqjukND_kB-RSl6r4QKAOpMidQ&s" alt="Logo" className='w-8 h-8 object-contain brightness-0 invert' />
                            </div>
                            <h1 className='px-3 text-2xl font-bold text-white tracking-tighter'>AXON</h1>
                        </NavLink>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Helping you zero in on your dream career with AI-powered smart matches and real-time insights.
                        </p>
                    </div>

                    <div className='grid grid-cols-2 gap-16'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-white font-semibold'>Company</h4>
                            <NavLink to="/about" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>About Us</NavLink>
                            <NavLink to="/careers" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>Careers</NavLink>
                            <NavLink to="/blog" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>Blog</NavLink>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-white font-semibold'>Support</h4>
                            <NavLink to="/contact" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>Contact Us</NavLink>
                            <NavLink to="/" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>Help Center</NavLink>
                            <NavLink to="/" className='text-gray-400 hover:text-blue-500 text-sm transition-colors'>Privacy Policy</NavLink>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h4 className='text-white font-semibold'>Connect With Us</h4>
                        <div className='flex gap-4'>
                            <a href="#" className='p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 transition-all'><Facebook size={18} /></a>
                            <a href="#" className='p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 transition-all'><Twitter size={18} /></a>
                            <a href="#" className='p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 transition-all'><Instagram size={18} /></a>
                            <a href="#" className='p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 transition-all'><Linkedin size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className='pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-center'>
                    <p className='text-gray-500 text-xs'>
                        © 2025 AXON Job Portal. All rights reserved.
                    </p>
                    <div className='flex items-center gap-2 text-gray-500 text-xs'>
                        <Mail size={14} /> <span>support@axon.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer