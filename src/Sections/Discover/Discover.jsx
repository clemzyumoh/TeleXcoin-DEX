import React, { useEffect, useState } from "react";
import axios from "axios";

const Discover = () => {
  const [news, setNews] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cryptopanic.com/api/v1/posts/?auth_token=7b68ebcfe0e52f6ecd30e0083285552c160442fb&public=true"
      )
      .then((res) => {
        setNews(res.data.results);
        setLoadingNews(false);
      })
      .catch((err) => {
        setError("Failed to load news");
        setLoadingNews(false);
      });

    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrending(res.data.coins);
        setLoadingTrending(false);
      })
      .catch((err) => {
        setError("Failed to load trending projects");
        setLoadingTrending(false);
      });
  }, []);

  return (
    <div className="p-4 text-white mb-32">
      <h2 className="text-2xl font-bold mb-4">Latest Web3 News</h2>
      {loadingNews ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="space-y-3">
          {news.map((item, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded-lg">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-2xl font-bold mt-6 mb-4">Trending Projects</h2>
      {loadingTrending ? (
        <p>Loading trending projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trending.map((coin) => (
            <div
              key={coin.item.id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setSelectedProject(coin.item)}>
              <div className="flex items-center gap-3">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="w-8 h-8"
                />
                <span className="font-semibold">{coin.item.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">{selectedProject.name}</h3>
            <p>Market Cap Rank: {selectedProject.market_cap_rank}</p>
            <a
              href={`https://www.coingecko.com/en/coins/${selectedProject.id}`}
              target="_blank"
              rel="noopener noreferrer"
    
              className="  text-[#48fd0c] hover:underline block mt-3">
              View on CoinGecko
            </a>
            <button
              className="mt-4 cursor-pointer bg-gray-800 dark:shadow-[3px_3px_10px_rgba(0,0,0,0.6),-8px_-8px_10px_rgba(255,255,255,0.1)] px-4 py-2 rounded"
              onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;
