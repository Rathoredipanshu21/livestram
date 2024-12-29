import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Nq2wYlWFucg?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&mute=1&playsinline=1&enablejsapi=1&origin=http://localhost:3000"
          title="Aaj Tak Live Stream"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
