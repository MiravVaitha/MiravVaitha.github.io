import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

export default function Nav() {
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/experience", label: "Experience" },
        { to: "/education", label: "Education" },
    ]

    return (
        <nav className="flex gap-6 mb-8">
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        cn(
                            "text-sm font-medium transition-colors hover:text-white/100",
                            isActive ? "text-white underline decoration-2 underline-offset-8" : "text-white/60"
                        )
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}
