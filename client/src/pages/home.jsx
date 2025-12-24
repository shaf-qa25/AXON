import { Briefcase, Figma, Github, Lamp, Mail, MapPin, Search, SearchX, IdCardLanyard, Zap, BarChart3, UserPlus, CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const icons = [
        { id: 1, component: <IdCardLanyard size={40} className="text-red-500" /> },
        { id: 2, component: <Figma size={40} className="text-purple-500" /> },
        { id: 3, component: <Github size={40} className="text-white" /> },
    ];

    const [index, setIndex] = useState(0);
    const [job,setJob] = useState("");
    const [location,setLocation]= useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % icons.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e)=>{
        setJob(e.target.value);
    }
    const handleChangeLocation = (e)=>{
        setLocation(e.target.value)
    }
    const handleSearch = (e)=>{
        e.preventDefault();
        navigate(`/list?q=${job}&l=${location}`)
    }
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            handleSearch(e)
        }
    }
    return (
        <>
            <section className=" flex flex-col items-center justify-center w-full min-h-screen bg-[#020617] overflow-hidden text-white pb-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

                <div className="h-20 w-20 overflow-hidden relative flex items-center justify-center mt-24 mb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={icons[index].id}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute"
                        >
                            {icons[index].component}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <h1 className="text-5xl font-bold text-center max-w-2xl leading-tight z-10 px-4">
                    Stop searching, start <span className="text-blue-500">zeroing in</span> on your dream career
                </h1>

                <div className="flex flex-col md:flex-row items-center w-[90%] max-w-4xl gap-4 mt-12 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-10 shadow-2xl">
                    <div className="flex items-center flex-1 px-4 gap-3 border-r border-white/10 w-full">
                        <Search className="text-blue-400" />
                        <input type="text" placeholder="Job title or keywords" className="bg-transparent w-full p-3 outline-none text-white placeholder:text-gray-400" 
                        value={job}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}/>
                    </div>
                    <div className="flex items-center flex-1 px-4 gap-3 w-full">
                        <MapPin className="text-blue-400" />
                        <input type="text" placeholder="City or zip code" className="bg-transparent w-full p-3 outline-none text-white placeholder:text-gray-400"
                        value={location}
                        onChange={handleChangeLocation}
                        onKeyDown={handleKeyDown} />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 w-full md:w-auto" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#030712] to-transparent z-0"></div>
            </section>

            <section className="relative z-20 bg-[#030712] px-6 md:px-12 pb-32 ">
                <div className="max-w-7xl my-auto mx-auto flex flex-col md:flex-row justify-around gap-8 items-stretch">

                    <div className="group relative flex-1 bg-[#0b1120]/50 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/50 group-hover:rotate-6 transition-transform">
                                <Briefcase className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mt-2">Every Job</h3>
                            <p className="text-gray-400 leading-relaxed">Searching for the right job is hard work. We’ve brought every job into one place so you can find yours.</p>
                            <a href="/list" className="mt-4 text-blue-400 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                Learn More <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="group relative flex-1 bg-[#0b1120]/50 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="bg-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-500/50 group-hover:rotate-6 transition-transform">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mt-2">Smart Matches</h3>
                            <p className="text-gray-400 leading-relaxed">Our AI analyzes your skills to show you jobs that actually fit your profile and expectations.</p>
                            <a href="/matches" className="mt-4 text-purple-400 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                Explore <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="group relative flex-1 bg-[#0b1120]/50 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="bg-pink-600 p-4 rounded-2xl shadow-lg shadow-pink-500/50 group-hover:rotate-6 transition-transform">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mt-2">Great Data</h3>
                            <p className="text-gray-400 leading-relaxed">Get real-time salary insights and company reviews before you even hit the apply button.</p>
                            <a href="/data" className="mt-4 text-pink-400 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                View Insights <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#020617] py-24 px-6 relative overflow-hidden">

                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">
                        How It <span className="text-indigo-500">Works</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-500">
                        <span className="absolute top-4 right-8 text-8xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">01</span>

                        <div className="relative">
                            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                                <UserPlus className="text-indigo-400 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Create Profile</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Fill in your details and upload your CV to get noticed by top recruiters instantly.
                            </p>
                        </div>
                    </div>

                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-500">
                        <span className="absolute top-4 right-8 text-8xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">02</span>

                        <div className="relative">
                            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                                <Search className="text-indigo-400 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Search The Job</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Use our "Zero in" filters to find roles that perfectly match your skills and salary.
                            </p>
                        </div>
                    </div>

                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-500">
                        <span className="absolute top-4 right-8 text-8xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">03</span>

                        <div className="relative">
                            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                                <CheckCircle className="text-indigo-400 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Get Hired</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Apply with one click and get direct interview calls from your dream companies.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] -z-10"></div>
            </section>
            <section className="bg-[#020617] py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Glassy Container */}
    <div className="flex flex-col md:flex-row justify-around gap-8 items-center p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden">
      
      {/* Background Decorative Glow (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

      {/* Stat 1: Jobs */}
      <div className="flex flex-col items-center text-center z-10">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
          <CountUp end={15000} duration={2.8} enableScrollSpy={true} scrollSpyOnce={true} suffix="+" />
        </h2>
        <p className="text-blue-400 font-medium uppercase tracking-widest text-sm">Active Jobs</p>
      </div>

      {/* Vertical Divider (Only for Desktop) */}
      <div className="hidden md:block h-16 w-px bg-white/10"></div>

      {/* Stat 2: Companies */}
      <div className="flex flex-col items-center text-center z-10">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
          <CountUp end={200} duration={2.8} enableScrollSpy={true} scrollSpyOnce={true} suffix="+" />
        </h2>
        <p className="text-purple-400 font-medium uppercase tracking-widest text-sm">Companies</p>
      </div>

      {/* Vertical Divider (Only for Desktop) */}
      <div className="hidden md:block h-16 w-px bg-white/10"></div>

      {/* Stat 3: Users */}
      <div className="flex flex-col items-center text-center z-10">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
          <CountUp end={10000} duration={2.8} enableScrollSpy={true} scrollSpyOnce={true} suffix="+" />
        </h2>
        <p className="text-pink-400 font-medium uppercase tracking-widest text-sm">Users</p>
      </div>

    </div>
  </div>
</section>
        </>
    )
}