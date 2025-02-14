import React, { useEffect, useState } from "react";

const NASA = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const res = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=5EabRLXQmfnCtdheIx2Jhk3GV7rvfueXwhXQNMB9"
        );
        const data = await res.json();
        setApod(data);
      } catch (error) {
        console.error("Error fetching NASA APOD:", error);
      }
    };
    fetchAPOD();
  }, []);

  if (!apod) return <div>Loading NASA APOD...</div>;

  return (
    <div style={{ textAlign: "center", marginBottom: "10px" }}>
      {apod.media_type === "image" && (
        <img
          src={apod.url}
          alt={apod.title}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
      )}
      <p>{apod.title}</p>
    </div>
  );
};

export default NASA;
