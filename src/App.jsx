import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// Main GIFs
import v2 from "./assets/images/viku2.gif";
import v3 from "./assets/images/viku3.gif";
import v4 from "./assets/images/viku4.gif";
import v5 from "./assets/images/viku5.gif";
import v6 from "./assets/images/viku6.gif";
import v7 from "./assets/images/viku7.gif";
import v8 from "./assets/images/viku8.gif";
import v14 from "./assets/images/viku14.png";
import v15 from "./assets/images/viku15.png";
import v16 from "./assets/images/viku16.gif";
import v17 from "./assets/images/viku17.gif";

// NEW GIFs viku31 - viku43
import v31 from "./assets/images/viku31.gif";
import v32 from "./assets/images/viku32.gif";
import v33 from "./assets/images/viku33.gif";
import v34 from "./assets/images/viku34.gif";
import v35 from "./assets/images/viku35.gif";
import v36 from "./assets/images/viku36.gif";
import v37 from "./assets/images/viku37.gif";
import v38 from "./assets/images/viku38.gif";
import v39 from "./assets/images/viku39.gif";
import v40 from "./assets/images/viku40.gif";
import v41 from "./assets/images/viku41.gif";
import v42 from "./assets/images/viku42.gif";
import v43 from "./assets/images/viku43.gif";

// PNGs for rain
import v18 from "./assets/images/viku18.png";
import v19 from "./assets/images/viku19.png";
import v20 from "./assets/images/viku20.png";
import v21 from "./assets/images/viku21.png";
import v22 from "./assets/images/viku22.png";
import v23 from "./assets/images/viku23.png";
import v24 from "./assets/images/viku24.png";
import v25 from "./assets/images/viku25.png";
import v26 from "./assets/images/viku26.png";
import v27 from "./assets/images/viku27.png";
import v28 from "./assets/images/viku28.png";
import v29 from "./assets/images/viku29.png";
import v30 from "./assets/images/viku30.png";

// Shop components
import ShopNow from "./shopnow.jsx";
import ShopNow2 from "./shopnow2.jsx";

// GIFs loop without viku1
const allGifs = [
  v3, v4, v5, v6, v7, v16, v17,
  v32, v33, v34, v35, v36, v37, v38,
  v39, v40, v41, v42, v43
];

const rainPNGs = [
  v18, v19, v20, v21, v22, v23,
  v24, v25, v26, v27, v28, v29, v30
];

const leftRightOnly = [v36, v42]; // never center

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

function Home() {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [ufo, setUfo] = useState({ show: false, top: 0, left: 0, direction: "left-to-right" });
  const [visibleGif, setVisibleGif] = useState(null);
  const [gifPairIndex, setGifPairIndex] = useState(0);
  const [showPairs, setShowPairs] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const [showCenter, setShowCenter] = useState(false);
  const [showViku31, setShowViku31] = useState(false);
  const [rainDrops, setRainDrops] = useState([]);

  // Stars
  useEffect(() => {
    setStars(Array.from({ length: 150 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1 + "px",
      delay: Math.random() * 2 + "s",
    })));
  }, []);

  // Shooting stars
  useEffect(() => {
    const spawnShootingStar = () => {
      if (stars.length === 0) return;
      const randomStarIndex = Math.floor(Math.random() * stars.length);
      const selectedStar = stars[randomStarIndex];
      const direction = Math.random() < 0.5 ? "left-to-right" : "right-to-left";
      const duration = 1.5;
      setShootingStars([{
        top: selectedStar.top,
        left: selectedStar.left,
        size: selectedStar.size,
        direction,
        duration,
        key: Date.now(),
      }]);
      setTimeout(() => setShootingStars([]), duration * 1000);
    };
    const interval = setInterval(spawnShootingStar, 7000);
    return () => clearInterval(interval);
  }, [stars]);

  // UFO
  useEffect(() => {
    const spawnUfo = () => {
      const direction = Math.random() < 0.5 ? "left-to-right" : "right-to-left";
      const startLeft = direction === "left-to-right" ? "-5%" : "105%";
      setUfo({ show: true, top: Math.random() * 80 + "%", left: startLeft, direction });
      setTimeout(() => setUfo({ show: false, top: 0, left: 0, direction: "left-to-right" }), 5000);
    };
    const interval = setInterval(spawnUfo, 12000);
    return () => clearInterval(interval);
  }, []);

  // Initial sequence
  useEffect(() => {
    setVisibleGif("v2");
    const t1 = setTimeout(() => {
      setVisibleGif(null);
      setShowCenter(true);
      setShowViku31(true);
    }, 1500);
    const t2 = setTimeout(() => {
      setShowViku31(false);
      setShowSpecial(true);
    }, 5500);
    const t3 = setTimeout(() => {
      setShowPairs(true);
    }, 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // GIF pairs loop
  useEffect(() => {
    if (!showPairs) return;
    const interval = setInterval(() => {
      setGifPairIndex(p => (p + 1) % Math.ceil(allGifs.length / 2));
      setShowSpecial(true);
      setTimeout(() => setShowSpecial(false), 2000);
    }, 2000);
    return () => clearInterval(interval);
  }, [showPairs]);

  // Rain
  useEffect(() => {
    const spawnRain = () => {
      setRainDrops(Array.from({ length: 15 }).map(() => ({
        src: rainPNGs[Math.floor(Math.random() * rainPNGs.length)],
        left: Math.random() * 90 + "%",
        top: "-10%",
        size: Math.random() * 40 + 20 + "px",
        key: Date.now() + Math.random(),
      })));
    };
    spawnRain();
    const interval = setInterval(spawnRain, 4000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayTime = (gif) => {
    if (gif === v3 || gif === v17) return 6000;
    if (gif === v32 || gif === v33) return 18000;
    if (gif === v34) return 15000;
    if ([v37, v40].includes(gif)) return 7000;
    if ([v38, v41].includes(gif)) return 2000;
    if (gif === v43) return 1000;
    return 4000;
  };

  const getGifStyle = (gif, idx) => {
    if (leftRightOnly.includes(gif)) {
      return { top: "50%", left: idx === 0 ? "20%" : "80%", transform: "translate(-50%,-50%)" };
    }
    return { top: "50%", left: idx === 0 ? "20%" : "80%", transform: "translate(-50%,-50%)" };
  };

  const currentPair = allGifs.slice(gifPairIndex * 2, gifPairIndex * 2 + 2);

  return (
    <div className="app">
      {stars.map((s, i) => (
        <div key={i} className="star" style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} />
      ))}
      {shootingStars.map(s => (
        <div
          key={s.key}
          className={`star shooting ${s.direction}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {ufo.show && (
        <img
          src={v15}
          alt="ufo"
          className={`ufo ${ufo.direction}`}
          style={{ top: ufo.top, left: ufo.left }}
        />
      )}
      <div className="image-container">
        {rainDrops.map(d => (
          <img key={d.key} src={d.src} className="rain-png" style={{ left: d.left, top: d.top, width: d.size }} />
        ))}
        <img src={v14} alt="viku14" className={`center ${showCenter ? "show" : ""}`} />
        {visibleGif === "v2" && <img src={v2} alt="viku2" className="gif show" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />}
        {showPairs && currentPair.map((gif, idx) => (
          <img key={gif} src={gif} alt={`pair-${idx}`} className="gif show"
            style={{ ...getGifStyle(gif, idx), transition: `opacity ${getDisplayTime(gif) / 1000}s ease-in-out` }} />
        ))}
        {showSpecial && <img src={v8} alt="viku8" className="gif show" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />}
        {showViku31 && <img src={v31} alt="viku31" className="gif show" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />}
      </div>
      <div className="button-container">
        <button className="animated-button join">Join</button>
        <button className="animated-button shop" onClick={() => navigate("/shopnow")}>Shop Now</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="/shopnow2" element={<ShopNow2 />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}