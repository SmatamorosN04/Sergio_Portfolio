import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        resources: {
            es: {
                translation: {
                    hero: {
                        title: "Sergio Matamoros",
                        subtitle: "FullStack Junior Developer",
                        desc: "Estudiante de último año de Ingeniería en Computación en la UNI..."
                    },
                    nav: {
                        exp: "Experiencia",
                        proj: "Proyectos"
                    }
                }
            },
            en: {
                translation: {
                    hero: {
                        title: "Sergio Matamoros",
                        subtitle: "Junior FullStack Developer",
                        desc: "Computer Engineering student in final stages at UNI. Focused on Next.js, React, Node.js and PostgreSQL."
                    },
                    nav: {
                        exp: "Experience",
                        proj: "Projects"
                    }
                }
            }
        }
    });

export default i18n;