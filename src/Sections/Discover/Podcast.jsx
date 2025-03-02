// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const podcasts = [
//   {
//     id: 1,
//     title: "Web3 Deep Dive",
//     host: "John Doe",
//     description: "Exploring the future of blockchain and DeFi.",
//     image: "/images/web3podcast.jpg",
//     link: "https://spotify.com/xyz",
//   },
//   {
//     id: 2,
//     title: "NFTs & Metaverse",
//     host: "Jane Smith",
//     description: "Weekly insights on NFTs and virtual worlds.",
//     image: "/images/nftpodcast.jpg",
//     link: "https://applepodcasts.com/xyz",
//   },
//   {
//     id: 3,
//     title: "Smart Contracts & DAOs",
//     host: "Alice Johnson",
//     description: "Diving into the world of DAOs, governance, and Solidity.",
//     image: "/images/daopodcast.jpg",
//     link: "https://audius.com/xyz",
//   },
// ];

// const PodcastPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPodcasts = podcasts.filter((podcast) =>
//     podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-3xl font-bold mb-4">Web3 Podcasts</h1>
//         <input
//           type="text"
//           placeholder="Search Podcasts..."
//           className="w-full p-2 mb-6 rounded-lg bg-gray-800 text-white outline-none"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {filteredPodcasts.map((podcast) => (
//           <motion.div
//             key={podcast.id}
//             className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
//             whileHover={{ scale: 1.05 }}>
//             <img
//               src={podcast.image}
//               alt={podcast.title}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="text-lg font-bold mt-2">{podcast.title}</h3>
//             <p className="text-sm text-gray-400">Host: {podcast.host}</p>
//             <p className="text-gray-300 text-sm mt-2">{podcast.description}</p>
//             <a
//               href={podcast.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-3 inline-block text-blue-500 hover:text-blue-400">
//               🎧 Listen Now
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PodcastPage;

//AIzaSyCSoSqNU_2bkq0bWwUW7a9jG1xfaGlknrU;

import React, { useState, useEffect } from "react";
import img10 from "../../assets/sax.webp";

const YOUTUBE_API_KEY = "AIzaSyCSoSqNU_2bkq0bWwUW7a9jG1xfaGlknrU"; // Replace with your API Key
const SEARCH_QUERY = "Web3 Podcast";
const MAX_RESULTS = 10;

const Podcast = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&type=video&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };
    fetchPodcasts();
  }, []);

  return (
    <div className="">
      <div className="">
        <h2 className="font-bold text-3xl text-center mb-5">Join Our Podcast</h2>
        <img src={img10} alt="" className="" />
      </div>
      <div className="min-h-screen bg-gray-800 mb-32 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Web3 Podcasts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] p-4 rounded-lg shadow-lg">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
                <p className="text-sm text-gray-400">
                  {video.snippet.channelTitle}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
