import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-900 shadow-lg py-4 px-8 flex items-center justify-between">
      <div className="text-white font-bold text-xl tracking-wider">
        GITAM Aero Astro Club
      </div>
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
        <Link href="/about" className="text-white hover:text-yellow-300 transition">About</Link>
        <Link href="/events" className="text-white hover:text-yellow-300 transition">Events</Link>
        <Link href="/dashboard" className="text-white hover:text-yellow-300 transition">Dashboard</Link>
      </div>
    </nav>
  );
}