"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProfileCard({ profile }) {
    // 1. Pick the value from the data (try avatar first, then image)
    const rawImage = profile.avatar || profile.image;

    // 2. Determine the path. 
    // If rawImage is empty, null, or undefined, use a hardcoded default from your /public folder.
    let imagePath = "/fallback-avatar.png";

    if (rawImage && rawImage.trim() !== "") {
        imagePath = rawImage.startsWith("http")
            ? rawImage
            : `/${rawImage}`;
    }

    return (
        <Link href={`/profile/${profile.id}`}>
            <div className="bg-white rounded-xl shadow hover:scale-105 transition cursor-pointer overflow-hidden group">
                <div className="bg-orange-500 h-24"></div>

                <div className="flex flex-col items-center pb-5">
                    <div className="relative -mt-12">
                        <Image
                            src={imagePath}
                            width={90}
                            height={90}
                            alt={`${profile.name}'s profile`}
                            className="rounded-full border-4 border-white object-cover aspect-square"
                        // Adding unoptimized={true} helps if you are still debugging local/remote path issues
                        />
                    </div>

                    <h2 className="mt-2 font-semibold text-lg">{profile.name}</h2>
                    <p className="text-gray-500 text-sm">
                        {profile.gender} | {profile.age} | {profile.role}
                    </p>

                    <button className="mt-2 text-sm px-3 py-1 border rounded-full hover:bg-gray-50">
                        Download My Resume
                    </button>
                </div>
            </div>
        </Link>
    );
}
