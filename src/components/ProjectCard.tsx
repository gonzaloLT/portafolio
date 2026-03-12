import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

const techColors: Record<string, string> = {
    React: "text-[#149ECA]",
    "Next.js": "text-gray-950",
    "Next.js 15": "text-gray-950",
    "Node.js": "text-[#339933]",
    TypeScript: "text-[#3178c6]",
    PostgreSQL: "text-[#336791]",
    MongoDB: "text-[#47A248]",
    Supabase: "text-[#3ECF8E]",
    Express: "text-gray-950",
    Firebase: "text-[#FFCA28]",
    "Sanity CMS": "text-[#F03E2F]",
    "Tailwind CSS": "text-[#06B6D4]",
    "Framer Motion": "text-[#0055FF]",
    Cloudinary: "text-[#3448C5]",
};

function StackBadge({ tech }: { tech: string }) {
    const brandColor = techColors[tech] || "text-gray-700";
    return (
        <span
            className={`font-mono text-[11px] font-bold px-3 py-1 bg-white border border-gray-200 rounded-sm shadow-sm ${brandColor}`}
        >
            {tech}
        </span>
    );
}

const GithubIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5"
        aria-hidden="true"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">

            <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B30A] focus-visible:ring-inset rounded-sm"
                aria-label={`Ver detalles de ${project.title}`}
            />

            {/* Imagen */}
            <div className="relative aspect-[16/10] w-full bg-white overflow-hidden border-b border-gray-100">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`Captura de pantalla de ${project.title}`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center m-4 border border-dashed border-gray-300 rounded-sm">
                        <span className="font-mono text-xs text-gray-500 font-medium">
                            Screenshot: {project.title}
                        </span>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-950 mb-2 group-hover:text-[#d97706] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium line-clamp-3">
                        {project.tagline}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.slice(0, 4).map((tech) => (
                        <StackBadge key={tech} tech={tech} />
                    ))}
                </div>
            </div>

            {/* Footer — z-20 para estar por encima del link de la card */}
            <div className="relative z-20 flex flex-col mt-auto border-t border-gray-50 bg-white">
                <div className="flex flex-wrap items-center gap-2 px-6 pt-5 pb-3">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono font-bold text-gray-950 hover:text-[#F5B30A] transition-colors bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B30A]"
                        >
                            Demo ↗
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono font-bold text-gray-600 hover:text-gray-950 transition-colors bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B30A]"
                        >
                            <GithubIcon /> GitHub
                        </a>
                    )}
                    {project.githubFrontend && (
                        <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono font-bold text-gray-600 hover:text-gray-950 transition-colors bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B30A]"
                        >
                            <GithubIcon /> Front
                        </a>
                    )}
                    {project.githubBackend && (
                        <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono font-bold text-gray-600 hover:text-gray-950 transition-colors bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B30A]"
                        >
                            <GithubIcon /> Back
                        </a>
                    )}
                </div>

                <div className="flex justify-end px-6 pb-6 w-full">
                    <span className="text-xs font-mono font-bold text-gray-950 group-hover:text-[#F5B30A] group-hover:translate-x-1 transition-all duration-300 pointer-events-none">
                        Detalles →
                    </span>
                </div>
            </div>
        </article>
    );
}