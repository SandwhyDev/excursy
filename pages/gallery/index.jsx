import React, { useState } from "react";

const Gallery = () => {
  const [message, setMessage] = useState([
    {
      id: 1,
      username: "sanyd",
      message: "apa kabs",
    },
    {
      id: 2,
      username: "nadila",
      message: "baique",
    },
  ]);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Gallery;
