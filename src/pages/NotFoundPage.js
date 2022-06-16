import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found flex justify-center items-center flex-col gap-3">
      <img
        src="https://png.pngitem.com/pimgs/s/255-2550295_http-404-hd-png-download.png"
        alt="not-found"
        className="w-[50%] object-cover"
      />

      <div className="flex justify-center">
        <Link to="/" className="link-home">
          <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
