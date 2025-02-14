// src/components/WorldTime.jsx
import React, { useState, useEffect } from "react";

const WorldTime = () => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Using TimeAPI.io to get the current time for Asia/Jerusalem.
  const url =
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jerusalem";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("TimeAPI.io data:", data);
        setTimeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching time:", err);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div>Loading date and time...</div>;
  if (!timeData) return <div>Failed to load time data.</div>;

  // timeData.dateTime contains the ISO string, for example: "2023-02-14T15:30:00"
  const dateTimeStr = timeData.dateTime;
  const dateObj = new Date(dateTimeStr);

  return (
    <div
      style={{ padding: "10px", backgroundColor: "#ddd", textAlign: "center" }}
    >
      <p>{dateObj.toLocaleString("en-US")}</p>
    </div>
  );
};

export default WorldTime;
