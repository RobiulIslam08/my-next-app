"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="bg-white shadow-md fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<Link href="/" className="text-2xl font-bold text-blue-600">
						MyLogo
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-6">
						<Link href="/" className={pathname == '/' ? 'text-blue-900 font-bold underline': ' text-black'}>
							Home
						</Link>
						<Link href="/about" className="hover:text-blue-600 text-black transition">
							About
						</Link>
						<Link href="/contact" className="hover:text-blue-600 text-black transition">
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-gray-700"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<div className="flex flex-col space-y-4 p-4">
						<Link
							href="/"
							className="hover:text-blue-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="hover:text-blue-600 transition"
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
						<Link
							href="/contact"
							className="hover:text-blue-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
