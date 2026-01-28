import { Link } from "react-router-dom"
import { Linkedin, Github, Mail, Instagram, ArrowRight } from "lucide-react"
import GlassCard from "@/components/ui/glass-card"

export default function Home() {
    const socials = [
        {
            href: "https://ie.linkedin.com/in/mirav-vaitha-26078b389",
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
        },
        {
            href: "https://github.com/MiravVaitha",
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
        },
        {
            href: "mailto:mirav.vaitha@gmail.com",
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            target: "_self",
        },
        {
            href: "https://www.instagram.com/mirav.v06/",
            icon: <Instagram className="w-5 h-5" />,
            label: "Instagram",
        },
    ]

    return (
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Hero Section */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Welcome, I'm Mirav
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    An engineering student turning ideas into real-world solutions.
                </p>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                    Engineering &bull; Building &bull; Problem Solving
                </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target={social.target || "_blank"}
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 transition-all hover:bg-white/10 hover:text-white hover:scale-110 active:scale-95"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <Link
                to="/experience"
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
                <span>View my work</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* About Section (Condensed for Home) */}
            <GlassCard className="text-left w-full mt-8">
                <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    I’m an engineering student based in Dublin, Ireland, with hands-on experience working on
                    software systems and technical projects. I enjoy building reliable, well-thought-out
                    solutions and learning how ideas move from early concepts to production-ready systems.
                </p>
            </GlassCard>
        </div>
    )
}
