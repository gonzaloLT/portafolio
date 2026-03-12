import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const stack = [
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Vercel",
];

export default function Home() {
    const erpProject = featuredProjects.find(
        (p) => p.slug === "el-estampadero",
    );

    return (
        <main className="relative min-h-screen isolate bg-white">
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[5%] -right-[5%] w-[45vw] h-[45vw] min-w-[300px] bg-gray-100 rounded-[3rem] rotate-12 opacity-80" />
                <div className="absolute bottom-[5%] -left-[5%] w-[35vw] h-[35vw] min-w-[250px] bg-[#F5B30A] rounded-[3rem] -rotate-12 opacity-30" />
            </div>

            <div className="relative z-10">
                <section className="max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-20 md:pb-28">
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
                        <div className="max-w-2xl flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 animate-fade-up delay-1">
                                <span className="w-8 h-px bg-[#F5B30A] hidden md:block" />
                                <p className="font-mono font-medium text-xs text-gray-700 tracking-widest uppercase">
                                    Analista Universitario en Sistemas · Full
                                    Stack Developer
                                </p>
                            </div>

                            <h1 className="text-[clamp(2.8rem,7vw,4.5rem)] font-extrabold leading-[1.1] tracking-tighter text-gray-950 mb-6 animate-fade-up delay-2">
                                Gonzalo <span className="text-gray-400">Barroso</span>
                            </h1>

                            <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-10 animate-fade-up delay-3">
                                Desarrollador Full Stack con experiencia en el
                                desarrollo de productos para clientes.
                                Actualmente curso el último año de Ingeniería en
                                Sistemas y he trabajado de forma autónoma
                                gestionando proyectos completos, desde el
                                relevamiento de requisitos hasta el despliegue
                                en producción.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-up delay-4">
                                <Link
                                    href="#projects"
                                    className="w-full sm:w-auto font-mono text-sm px-8 py-4 bg-[#F5B30A] text-gray-950 hover:bg-[#d97706] transition-colors rounded-sm font-bold shadow-sm text-center"
                                >
                                    Proyectos
                                </Link>

                                <a
                                    href="/cv-gonzalo-barroso.pdf"
                                    download
                                    className="w-full sm:w-auto font-mono text-sm px-8 py-4 border-2 border-gray-200 text-gray-800 hover:border-gray-900 hover:text-gray-950 font-semibold transition-all rounded-sm bg-white/80 backdrop-blur-sm text-center"
                                >
                                    Descargar CV ↓
                                </a>
                            </div>
                        </div>

                        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-50 relative animate-fade-up delay-1 mt-8 md:mt-0">
                            <Image
                                src="/foto.webp"
                                alt="Gonzalo Barroso"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 pb-28">
                    <div className="mb-8 flex items-baseline gap-4 border-b border-gray-100 pb-4">
                        <span className="font-mono font-bold text-sm text-[#F5B30A]">
                            01
                        </span>
                        <h2 className="text-sm font-mono font-bold text-gray-950 uppercase tracking-widest">
                            Producto Destacado
                        </h2>
                    </div>

                    <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                        <div className="relative aspect-video bg-gray-50 border-b border-gray-200">
                            {erpProject?.videoUrl ? (
                                <iframe
                                    src={erpProject.videoUrl}
                                    title="Demo ERP El Estampadero"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full absolute inset-0"
                                />
                            ) : (
                                <Image
                                    src="/erp.webp"
                                    alt="Vista previa del ERP El Estampadero"
                                    fill
                                    className="object-contain"
                                />
                            )}
                        </div>

                        <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl font-bold text-gray-950 mb-3">
                                    ERP "El Estampadero"
                                </h3>
                                <p className="text-base font-medium text-gray-600 leading-relaxed mb-4">
                                    Desarrollo freelance integral. El taller
                                    operaba con planillas manuales; diseñé e
                                    implementé desde cero un sistema que
                                    digitalizó y automatizó el flujo completo de
                                    la empresa: desde la toma del pedido hasta
                                    la entrega y cobranza, con control
                                    financiero en tiempo real.
                                </p>

                                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm">
                                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">
                                        Acceso Demo:
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 font-mono text-sm">
                                        <span className="text-gray-700">
                                            <span className="text-gray-400 select-none">
                                                User:
                                            </span>
                                            <span className="font-semibold text-gray-900 select-all">
                                                admin@prueba.com
                                            </span>
                                        </span>
                                        <span className="text-gray-700">
                                            <span className="text-gray-400 select-none">
                                                Pass:
                                            </span>
                                            <span className="font-semibold text-gray-900 select-all">
                                                123456
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <a
                                    href="https://demo-sistema-indumentaria.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir demo en vivo del sistema ERP El Estampadero"
                                    className="font-mono font-bold text-sm px-6 py-3 bg-gray-950 text-white hover:bg-[#F5B30A] hover:text-gray-950 transition-colors rounded-sm text-center"
                                >
                                    Demo en vivo ↗
                                </a>

                                <Link
                                    href="/projects/el-estampadero"
                                    className="font-mono font-semibold text-sm px-6 py-3 border border-gray-200 text-gray-700 hover:border-gray-900 transition-all rounded-sm text-center"
                                >
                                    Ver detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="max-w-5xl mx-auto px-6 pb-28">
                    <div className="mb-12 flex items-baseline gap-4 border-b border-gray-100 pb-4">
                        <span className="font-mono font-bold text-sm text-[#F5B30A]">
                            02
                        </span>
                        <h2 className="text-sm font-mono font-bold text-gray-950 uppercase tracking-widest">
                            Proyectos
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {featuredProjects
                            .filter((p) => p.slug !== "el-estampadero")
                            .map((project) => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                    </div>
                </section>

                <section id="about" className="max-w-5xl mx-auto px-6 pb-28">
                    <div className="mb-12 flex items-baseline gap-4 border-b border-gray-100 pb-4">
                        <span className="font-mono font-bold text-sm text-[#F5B30A]">
                            03
                        </span>
                        <h2 className="text-sm font-mono font-bold text-gray-950 uppercase tracking-widest">
                            Perfil Profesional
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-start">
                        <div className="lg:col-span-3 space-y-6 text-gray-700 font-medium leading-relaxed">
                            <p>
                                Soy Desarrollador Full Stack con experiencia
                                demostrable construyendo soluciones web para
                                múltiples sectores (e-commerce, inmobiliario,
                                gestión empresarial).
                            </p>
                            <p>
                                Recibido de Analista Universitario en Sistemas y
                                con el 80% de la Ingeniería en Sistemas
                                completada.
                            </p>
                        </div>

                        <div className="lg:col-span-2 p-8 bg-white rounded-sm border border-gray-200 shadow-sm">
                            <p className="font-mono font-bold text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-3">
                                Stack Técnico
                            </p>

                            <div className="flex flex-wrap gap-2.5">
                                {stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono font-semibold text-xs px-3.5 py-2 bg-gray-100 border border-gray-200 text-gray-800 rounded-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 pb-20">
                    <div className="border-t-2 border-gray-950 pt-12 md:pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white p-6 md:p-10 rounded-sm border-x border-b border-gray-100 shadow-sm overflow-hidden">
                        <div className="w-full md:w-auto">
                            <p className="text-sm font-semibold text-gray-600 mb-2">
                                Contactame
                            </p>

                            <a
                                href="mailto:gonzalobarroso12@gmail.com"
                                className="text-xl sm:text-2xl md:text-3xl text-gray-950 font-extrabold hover:text-[#d97706] transition-colors break-words break-all block w-full"
                            >
                                gonzalobarroso12@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-6 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 w-full md:w-auto">
                            <a
                                href="https://linkedin.com/in/gonzalo-barroso"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil de LinkedIn de Gonzalo Barroso"
                                className="font-mono font-bold text-sm text-gray-950 hover:underline decoration-[#F5B30A] decoration-2 underline-offset-4"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="https://github.com/gonzaloLT"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Repositorio de GitHub de Gonzalo Barroso"
                                className="font-mono font-bold text-sm text-gray-950 hover:underline decoration-[#F5B30A] decoration-2 underline-offset-4"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}