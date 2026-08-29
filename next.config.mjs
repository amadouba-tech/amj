/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Picsum sert les photos temporaires (voir data/images.js). Si vous passez
    // à un autre service ou à vos propres photos hébergées ailleurs, ajoutez
    // son domaine ici — ou supprimez ce bloc si toutes les photos sont locales.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
