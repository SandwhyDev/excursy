import React, { useState } from "react";

const Gallery = () => {
  const [message, setMessage] = useState([
    {
      id: 1,
      username: "sandy",
      message: "apa kabs",
    },
    {
      id: 2,
      username: "nadila",
      message: "baique",
    },
  ]);
  return (
    <div className="p-10 flex  gap-10">
      <form className="form_message flex flex-col gap-2">
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" className="border-2" />

        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="border-2"
        ></textarea>

        <button className="w-[100px] p-2 bg-blue-500"> kirim pesan</button>
      </form>

      <div className="flex flex-col">
        <h1 className="text-lg ">message</h1>

        <div className="card_container flex flex-col gap-4">
          {message.map((e) => (
            <div className="card_message bg-white shadow-md p-2" key={e.id}>
              <p>{e.username}</p>
              <p className="text-sm">{e.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
