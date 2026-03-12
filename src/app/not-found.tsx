import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative min-h-screen isolate bg-white flex items-center justify-center p-6">
            {/* Fondo decorativo (Mismas figuras geométricas del inicio) */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[5%] -right-[5%] w-[45vw] h-[45vw] min-w-[300px] bg-gray-100 rounded-[3rem] rotate-12 opacity-80" />
                <div className="absolute bottom-[5%] -left-[5%] w-[35vw] h-[35vw] min-w-[250px] bg-[#F5B30A] rounded-[3rem] -rotate-12 opacity-30" />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up delay-1">
                    <p className="font-mono font-bold text-sm text-[#F5B30A] uppercase tracking-widest">
                        Error 404
                    </p>
                </div>

                <h1 className="text-[clamp(6rem,15vw,10rem)] font-extrabold leading-none tracking-tighter text-gray-950 mb-2 animate-fade-up delay-2">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fade-up delay-3">
                    Página no encontrada
                </h2>

                <p className="text-lg font-medium text-gray-600 leading-relaxed mb-10 animate-fade-up delay-4 max-w-md mx-auto">
                    Lo sentimos, la ruta que estás buscando no existe, ha sido movida o eliminada temporalmente.
                </p>

                <div className="animate-fade-up delay-5">
                    <Link
                        href="/"
                        className="inline-block font-mono text-sm px-8 py-4 bg-[#F5B30A] text-gray-950 hover:bg-[#d97706] transition-colors rounded-sm font-bold shadow-sm text-center"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}