import React from "react";

const Banner = () => {
  return (
    <div className="center">
      <a href="/">
        <img
          src="img/chat-banner.png"
          style={{ padding: 0, margin: 0, width: "100%", minHeight: 40 }}
          className="img-responsive"
          alt="banner"
        />
      </a>
    </div>
  );
};

export default Banner;
