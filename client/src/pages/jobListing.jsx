import { useSearchParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getLists } from "../api/API";

export const JobList = () => {
    const [searchParams] = useSearchParams(); //url ki value ka access data h
    const query = searchParams.get('q') || "";
    const location = searchParams.get('l') || "";

    const { data, isPending, isError } = useQuery({
        queryKey: ["jobs", query, location],
        queryFn: () => getLists(query, location),
        enabled: !!query || !!location,
        staleTime: 1000 * 60 * 30,
    })
    if (isPending) return <div className="text-white">Loading jobs...</div>;
    if (isError) return <div className="text-white">Error fetching data!</div>;

    return (
        <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-1">
                {data && data.map((job) => (
                    <div
                        key={job.job_id}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-400 group"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-6">

                            <div className="flex-shrink-0">
                                <img
                                    className="w-16 h-16 rounded-xl object-contain bg-slate-100 p-2 border border-slate-100 group-hover:scale-105 transition-transform"
                                    src={job.employer_logo || 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk='}
                                    alt="logo"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {job.job_title || "Frontend Developer"}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm font-medium text-slate-600">{job.employer_name}</span>
                                            <span className="text-slate-300">•</span>
                                            <span className="text-sm text-slate-500 italic">{job.job_city}, {job.job_country}</span>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                        {job.job_employment_type}
                                    </span>
                                </div>

                                <p className="mt-4 text-slate-600 leading-relaxed text-sm line-clamp-3">
                                    {job.job_description}
                                </p>

                                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-50">
                                    <a
                                        href={job.employer_website}
                                        target="_blank"
                                        className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider"
                                    >
                                        Visit Website
                                    </a>

                                    <a
                                        href={job.job_apply_link}
                                        target="_blank"
                                        className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-blue-600 shadow-sm transition-all active:scale-95"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};