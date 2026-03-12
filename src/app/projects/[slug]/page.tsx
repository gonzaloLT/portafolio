import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Gonzalo Barroso`,
    description: project.tagline,
  };
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline-block mr-2 -mt-0.5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Determinamos si es un proyecto universitario para cambiar los textos dinámicamente
  const isUniversityProject = project.slug === "task-tracker";

  return (
    <main className="min-h-screen bg-white text-gray-900 relative isolate">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] -right-[5%] w-[45vw] h-[45vw] min-w-[300px] bg-gray-100 rounded-[3rem] rotate-12 opacity-50" />
        <div className="absolute bottom-[5%] -left-[5%] w-[35vw] h-[35vw] min-w-[250px] bg-[#F5B30A] rounded-[3rem] -rotate-12 opacity-15" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-4">
        <Link
          href="/#projects"
          className="font-mono text-xs font-bold text-gray-500 hover:text-[#F5B30A] transition-colors inline-flex items-center gap-2"
        >
          ← Volver a Proyectos
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-1 bg-[#F5B30A]" />
          <p className="font-mono font-bold text-xs text-gray-800 uppercase tracking-widest">
            {isUniversityProject ? "Proyecto Universitario — Programación Web" : "Proyecto Freelance Real"}
          </p>
        </div>
        
        <h1 className="text-[clamp(2.5rem,6vw,3.8rem)] font-extrabold leading-tight text-gray-950 mb-6 tracking-tighter">
          {project.title}
        </h1>
        
        <p className="text-xl font-medium text-gray-700 leading-relaxed mb-12 max-w-3xl">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-12">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-bold px-4 py-2 bg-gray-100 border border-gray-200 text-gray-800 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-12">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-7 py-3.5 bg-[#F5B30A] text-gray-950 hover:bg-[#d97706] hover:text-white transition-colors rounded-sm font-bold shadow-sm"
            >
              Ver proyecto en vivo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-7 py-3.5 border-2 border-gray-200 text-gray-800 hover:border-gray-950 transition-all rounded-sm font-semibold bg-white flex items-center"
            >
              <GithubIcon /> Código Fuente
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-7 py-3.5 border-2 border-gray-200 text-gray-800 hover:border-gray-950 transition-all rounded-sm font-semibold bg-white flex items-center"
            >
              <GithubIcon /> Repositorio Frontend
            </a>
          )}
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-7 py-3.5 border-2 border-gray-200 text-gray-800 hover:border-gray-950 transition-all rounded-sm font-semibold bg-white flex items-center"
            >
              <GithubIcon /> Repositorio Backend
            </a>
          )}
        </div>
      </section>

      {project.videoUrl && (
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="aspect-video rounded-sm overflow-hidden border border-gray-200 shadow-md bg-white">
            <iframe
              src={project.videoUrl}
              title={`${project.title} — Demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
            <p className="font-mono font-bold text-xs text-gray-950 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">
              {isUniversityProject ? "Objetivo Académico" : "Requerimiento del Cliente"}
            </p>
            <p className="text-gray-800 font-medium leading-relaxed text-base">
              {project.problem}
            </p>
          </div>
          <div className="bg-gray-950 p-8 rounded-sm shadow-xl">
            <p className="font-mono font-bold text-xs text-[#F5B30A] uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
              {isUniversityProject ? "Arquitectura e Implementación" : "Solución Desarrollada"}
            </p>
            <p className="text-gray-100 font-medium leading-relaxed text-base">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-950 mb-8 tracking-tight">
            Características Principales
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-sm border border-gray-200">
                <span className="font-mono font-bold text-lg text-[#F5B30A] shrink-0 mt-[-2px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}