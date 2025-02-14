import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6b5239fad68ae1c2a2a6bb1d574a9203";
  const url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&country=il`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [url]);

  if (loading) return <div>טוען מבזקי חדשות...</div>;

  return (
    <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
      <h2>מבזקי חדשות</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {news.map((article, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0077cc" }}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
