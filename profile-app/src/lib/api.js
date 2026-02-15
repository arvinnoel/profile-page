const API_URL = "https://profile-page-6znm.onrender.com";

export async function getProfiles() {
    const res = await fetch(`${API_URL}/profiles`);
    return res.json();
}

export async function getProfile(id) {
    const res = await fetch(`${API_URL}/profiles/${id}`);
    return res.json();
}
