import { Briefcase, Chrome, Figma, Github, Lamp, Mail, MapPin, Search, SearchX } from 'lucide-react';
import CountUp from 'react-countup';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';

export const Home = () => {
    const icons = [
        { id: 1, component: <Chrome size={40} className="text-red-500" /> },
        { id: 2, component: <Figma size={40} className="text-purple-500" /> },
        { id: 3, component: <Github size={40} className="text-white" /> },
    ];

        const [index, setIndex] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % icons.length);
            }, 2000); // Har 2 second mein icon badlega
            return () => clearInterval(timer);
        }, []);
    
        return (
            <>
                <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#020617] overflow-hidden text-white">

                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

                    <div className="h-20 w-20 overflow-hidden relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={icons[index].id}
                                initial={{ y: 40, opacity: 0 }}   // Niche se shuru hoga
                                animate={{ y: 0, opacity: 1 }}    // Center mein aayega
                                exit={{ y: -40, opacity: 0 }}    // Upar ja kar gayab
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute"
                            >
                                {icons[index].component}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <h1 className="text-5xl font-bold text-center max-w-2xl leading-tight z-10">
                        Stop searching, start <span className="text-blue-500">zeroing in</span> on your dream career
                    </h1>

                    <div className="flex flex-col md:flex-row items-center w-full max-w-4xl gap-4 mt-12 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-10 shadow-2xl">

                        <div className="flex items-center flex-1 px-4 gap-3 border-r border-white/10 w-full">
                            <Search className="text-blue-400" />
                            <input type="text" placeholder="Job title or keywords" className="bg-transparent w-full p-3 outline-none text-white placeholder:text-gray-400" />
                        </div>

                        <div className="flex items-center flex-1 px-4 gap-3 w-full">
                            <MapPin className="text-blue-400" />
                            <input type="text" placeholder="City or zip code" className="bg-transparent w-full p-3 outline-none text-white placeholder:text-gray-400" />
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-2xl transition-all hover:scale-105 active:scale-95 w-full md:w-auto">
                            Search
                        </button>
                    </div>
                </section>
                <section className='bg-violet-600 h-[500px] flex justify-around gap-5 items-center '>
                    <div className='grow h-[300px] border-2 border-black  bg-amber-100 ml-3'>
                        EVERY JOB
                    </div>
                    <div className='grow h-[300px] border-2 border-black bg-amber-100'>
                        SMART MATCHES
                    </div>
                    <div className='grow h-[300px] border-2 border-black bg-amber-100 mr-3'>
                        GREAT DATA
                    </div>
                </section>

                <section className='bg-indigo-500 h-[500px]  '>
                    <h1>How It Works</h1>
                    <div className='flex justify-around gap-5 items-center my-24'>
                        <div className='grow h-[300px] border-2 border-black  bg-amber-100 ml-3'>
                            Create Profile
                        </div>
                        <div className='grow h-[300px] border-2 border-black bg-amber-100'>
                            Search the job
                        </div>
                        <div className='grow h-[300px] border-2 border-black bg-amber-100 mr-3'>
                            Get Hired
                        </div>
                    </div>
                </section>
                <section className='bg-red-400 h-[400px]'>
                    <div className='flex justify-around gap-5 items-center'>
                        <div className='grow h-[300px] border-2 border-black  bg-amber-100 mt-10 ml-3'>
                            <h2 className="text-4xl font-bold">
                                <CountUp
                                    end={15000}
                                    duration={2.8}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    suffix="+"
                                />
                            </h2>
                            <p>Active Jobs</p>
                        </div>
                        <div className='grow h-[300px] border-2 border-black bg-amber-100 mt-10'>
                            <h2 className="text-4xl font-bold">
                                <CountUp
                                    end={200}
                                    duration={2.8}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    suffix="+"
                                />
                            </h2>
                            <p>Companies</p>
                        </div>
                        <div className='grow h-[300px] border-2 border-black bg-amber-100 mt-10 mr-3'>
                            <h2 className="text-4xl font-bold">
                                <CountUp
                                    end={10000}
                                    duration={2.8}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    suffix="+"
                                />
                            </h2>
                            <p>Users</p>
                        </div>

                        {/* <div className="w-2/3 h-auto bg-white border-black">
                    <h2 className="text-4xl font-bold">
                        <CountUp
                            end={15000}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            suffix="+"
                        />
                    </h2>
                    <p>Active Jobs</p>
                </div> */}
                    </div>
                </section>
            </>
        )
    }