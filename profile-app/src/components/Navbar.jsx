import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
            <Link href="/" className="text-xl font-bold text-orange-600 tracking-tight">
                PRIME PAGE
            </Link>
            <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium border-l pl-4 border-gray-200">
                    User Portal
                </span>

            </div>
        </nav>
    );
}
