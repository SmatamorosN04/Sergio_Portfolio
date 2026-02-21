import * as React from "react";

const FeaturedProject: React.FC = () => {
    return (
        <section className="w-full mt-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white border-b-2 border-blue-500 w-fit">
                Featured Project
            </h2>

            <article className="group relative w-full bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg transition-all hover:shadow-2xl">
                <div className="flex flex-col lg:flex-row">

                    {/* 1. Image Section: Left on desktop, Top on mobile */}
                    <div className="w-full lg:w-1/2 overflow-hidden bg-gray-200 dark:bg-gray-900">
                        <img
                            src="/assets/img/Portada.png"
                            alt="ArielCalendar Preview"
                            className="w-full h-full object-cover min-h-62.5 lg:min-h-100 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-blue-600 text-white rounded-full">
                                    Star Project
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    Jan 2026 - Feb 2026
                                </span>
                            </div>

                            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                                ArielCalendar
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Fullstack appointment management system built with <strong>Next.js 16</strong>.
                                Featuring a secure admin dashboard and a public booking interface.
                                Optimized for performance using <strong>Server Actions</strong> and
                                <strong> Mongoose</strong> for robust data modeling.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Next.JS 16", "TypeScript", "MongoDB","node.JS", "Server Actions", "TailwindCSS"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://github.com/SmatamorosN04/scheduling_APP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                View Code
                            </a>
                            <a
                                href="https://scheduling-app-orcin-eight.vercel.app/"
                                className="flex-1 text-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default FeaturedProject;