import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import { getProfiles } from "@/lib/api";

export default async function Home() {
    const profiles = await getProfiles();

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="grid md:grid-cols-3 gap-8 p-10">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
}
