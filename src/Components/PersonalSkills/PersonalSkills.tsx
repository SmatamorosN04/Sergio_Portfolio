import * as React from "react";
import {
    MessageSquare,
    Lightbulb,
    Users,
    Rocket,
    Languages
} from "lucide-react";

const PersonalSkills: React.FC = () => {
    const personalSkills = [
        { name: "Open-Minded", icon: <Lightbulb size={20} className="text-yellow-500" />, desc: "Adaptable to new technologies." },
        { name: "Communicative", icon: <MessageSquare size={20} className="text-blue-500" />, desc: "Clarity in explaining ideas." },
        { name: "Sociable", icon: <Users size={20} className="text-green-500" />, desc: "Good in Team Work" },
        { name: "Dedicated", icon: <Rocket size={20} className="text-red-500" />, desc: "Commitment to clean code." }
    ];

    return (
        <section className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Languages className="text-blue-600" />
                        <h3 className="text-xl font-bold dark:text-white">Languages</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium dark:text-gray-200">Inglés</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold rounded-full">B2 - Upper Intermediate</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full w-[75%]"></div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <span className="font-medium dark:text-gray-200">Español</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full">Nativo</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-green-600 h-full w-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <h3 className="text-xl font-bold dark:text-white mb-6">Personal Skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {personalSkills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-start p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="mb-2">{skill.icon}</div>
                                <span className="text-sm font-bold dark:text-white">{skill.name}</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">{skill.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PersonalSkills;