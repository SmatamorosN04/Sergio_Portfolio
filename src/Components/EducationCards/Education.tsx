import * as React from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education: React.FC = () => {
    const certificates = [
        "Fullstack Web Development",
        "Advanced React & Next.js",
        "Database Design & SQL",
        "English B2 Certification"
    ];

    return (
        <section className="w-full mt-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white border-b-2 border-blue-500 w-fit">
                Education & Certifications
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-5 items-center md:items-start">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <GraduationCap size={40} className="text-blue-600" />
                    </div>
                    <div>
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">In Progress - 5to Año</span>
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white mt-1">Computer Engineering</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Universidad Nacional de Ingeniería (UNI)</p>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                            Focused on algorithms, data structures, and large-scale systems development.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="text-blue-600" size={24} />
                        <h3 className="text-lg font-bold dark:text-white">Certificates</h3>
                    </div>

                    <ul className="space-y-3 mb-6">
                        {certificates.map((cert, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span> {cert}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://drive.google.com/drive/folders/1kfY7xDVEkVMJ1wsSo4wwVlXK3xZv8ZWb?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 bg-gray-100 dark:bg-gray-900 hover:bg-blue-600 hover:text-white transition-all rounded-lg text-sm font-bold dark:text-white"
                    >
                        Verify in Drive <ExternalLink size={14} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Education;