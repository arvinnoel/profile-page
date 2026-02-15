import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getProfile } from "@/lib/api";

export default async function ProfilePage({ params }) {
    const { id } = await params;
    const profile = await getProfile(id);

    const avatar =
        profile.avatar?.startsWith("http")
            ? profile.avatar
            : profile.avatar
                ? `/${profile.avatar}`
                : `https://i.pravatar.cc/150?img=${profile.id}`;

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-40 relative flex items-center justify-center">
                <img
                    src={avatar}
                    alt={profile.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg absolute -bottom-16 object-cover"
                />
            </div>

            <div className="max-w-5xl mx-auto pt-20 px-6 text-center">

                <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                <p className="text-gray-500 mt-1">
                    {profile.gender ?? "Male"} | {profile.age ?? "25"} | {profile.role ?? "Developer"}
                </p>

                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600">
                    Download My Resume
                </button>

                <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
                    {["Data Skills", "Professional Journey", "Key Insights", "Learning & Academics", "Endorsements"].map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 bg-white rounded-full shadow text-gray-600"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow p-6 mt-8 text-left">
                    <p className="text-gray-600 leading-relaxed">
                        {profile.about}
                    </p>
                </div>

                <div className="flex justify-center gap-6 mt-10 opacity-40">
                    {["ps", "js", "html", "css", "python", "excel", "word", "ppt"].map((icon) => (
                        <img
                            key={icon}
                            src={`/icons/${icon}.png`}
                            className="h-10"
                            alt=""
                        />
                    ))}
                </div>

                {profile.projects?.length > 0 && (
                    <div className="mt-12 text-left">
                        <h2 className="text-xl font-semibold mb-6">
                            Case Insights & Key Projects
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {profile.projects.map((project, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
                                >
                                    <img
                                        src={`/${project.image}`}
                                        className="h-40 w-full object-cover"
                                        alt={project.title}
                                    />
                                    <div className="p-4 text-center font-medium">
                                        {project.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {profile.youtube && (
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold mb-4">Visual Resume</h2>

                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-80"
                                src={profile.youtube.replace("watch?v=", "embed/")}
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                <div className="mt-16 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-10 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold">
                        Connect with {profile.name}
                    </h2>

                    <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold shadow">
                        Send Message
                    </button>
                </div>

                <div className="mt-8 mb-12">
                    <Link href="/">
                        <button className="text-gray-500 hover:text-gray-700">
                            ← Back
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
