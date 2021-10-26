import { useState } from "react";
import "./Advertiser.css";

// import(useState);
function Advertiser() {
  const [text, setText] = useState(true);
  return (
    <div className="ad-container">
      <button
        className="toggle-ad"
        onClick={() => {
          setText(!text);
        }}
      >
        Toggle Ad
      </button>
      {text && (
        <div className="ad-text">
          Thousands of new affordable styles are waiting for you just one click
          away!
        </div>
      )}
    </div>
  );
}

export default Advertiser;
