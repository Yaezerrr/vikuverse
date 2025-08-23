import React, { useEffect, useState } from "react";
import "./App.css";
import v1 from "./assets/images/viku1.gif";
import v2 from "./assets/images/viku2.gif";
import v3 from "./assets/images/viku3.gif";
import v4 from "./assets/images/viku4.gif";
import v5 from "./assets/images/viku5.gif";
import v6 from "./assets/images/viku6.gif";
import v7 from "./assets/images/viku7.gif";
import v8 from "./assets/images/viku8.gif";
import v14 from "./assets/images/viku14.png"; // Center PNG
import v15 from "./assets/images/viku15.png"; // Tiny UFO
import v16 from "./assets/images/viku16.gif";
import v17 from "./assets/images/viku17.gif";

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

const allGifs = [v1, v3, v4, v5, v6, v7, v16, v17];
const rainPNGs = [v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30];

export default function App() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [ufo, setUfo] = useState({ show: false, top: 0, left: 0 });
  const [visibleGif, setVisibleGif] = useState(null);
  const [gifPairIndex, setGifPairIndex] = useState(0);
  const [showPairs, setShowPairs] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const [showCenter, setShowCenter] = useState(false);
  const [rainDrops, setRainDrops] = useState([]);

  // Stars
  useEffect(() => {
    const tempStars = Array.from({ length: 150 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1 + "px",
      delay: Math.random() * 2 + "s",
    }));
    setStars(tempStars);
  }, []);

  // Shooting Stars - vertical arrow
  useEffect(() => {
    const spawnStar = () => {
      const duration = Math.random() * 1 + 0.5;
      setShootingStars([
        {
          top: "-5%",
          left: Math.random() * 100 + "%",
          duration,
          key: Date.now(),
        },
      ]);
      setTimeout(() => setShootingStars([]), 1500);
    };
    const interval = setInterval(spawnStar, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  // UFO
  useEffect(() => {
    const interval = setInterval(() => {
      setUfo({ show: true, top: Math.random() * 80 + "%", left: "-5%" });
      setTimeout(() => setUfo({ show: false, top: 0, left: 0 }), 5000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Sequence viku2 → viku14 → gif pairs
  useEffect(() => {
    setVisibleGif("v2");
    const timeout1 = setTimeout(() => {
      setVisibleGif(null);
      setShowCenter(true);
    }, 1500);

    const timeout2 = setTimeout(() => {
      setShowPairs(true);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // GIF pairs loop
  useEffect(() => {
    if (!showPairs) return;
    const interval = setInterval(() => {
      setGifPairIndex((prev) => (prev + 1) % Math.ceil(allGifs.length / 2));
      setShowSpecial(true);
      setTimeout(() => setShowSpecial(false), 2000);
    }, 2000);
    return () => clearInterval(interval);
  }, [showPairs]);

  // Rain drops - continuous
  useEffect(() => {
    const spawnRain = () => {
      const drops = Array.from({ length: 15 }).map(() => ({
        src: rainPNGs[Math.floor(Math.random() * rainPNGs.length)],
        left: Math.random() * 90 + "%",
        top: "-10%",
        size: Math.random() * 40 + 20 + "px",
        key: Date.now() + Math.random(),
      }));
      setRainDrops(drops);
    };
    spawnRain();
    const interval = setInterval(spawnRain, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPair = allGifs.slice(gifPairIndex * 2, gifPairIndex * 2 + 2);
  const getDisplayTime = (gif) => (gif === v3 || gif === v17 ? 6000 : 2000);

  return (
    <div className="app">
      {/* Stars */}
      {stars.map((star,i)=>(
        <div key={i} className="star" style={{top:star.top,left:star.left,width:star.size,height:star.size,animationDelay:star.delay}}/>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map(star=>(
        <div key={star.key} className="shooting-star" style={{
          left: star.left,
          animationDuration:`${star.duration}s`
        }}/>
      ))}

      {/* UFO */}
      {ufo.show && <img src={v15} alt="ufo" className="ufo" style={{top:ufo.top,left:ufo.left}} />}

      {/* Image Container */}
      <div className="image-container">
        {/* Rain */}
        {rainDrops.map(drop=>(
          <img key={drop.key} src={drop.src} className="rain-png" style={{left:drop.left,top:drop.top,width:drop.size}}/>
        ))}

        {/* Center */}
        <img src={v14} alt="viku14" className={`center ${showCenter ? "show" : ""}`}/>

        {/* Intro GIF */}
        {visibleGif==="v2" && <img src={v2} alt="viku2" className="gif show" style={{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>}

        {/* GIF pairs */}
        {showPairs && currentPair.map((gif,idx)=>(
          <img key={idx} src={gif} alt={`pair-${idx}`} className="gif show" style={{top:"50%",left:idx===0?"20%":"80%",transform:"translate(-50%,-50%)",transition:`opacity ${getDisplayTime(gif)/1000}s ease-in-out`}}/>
        ))}

        {showSpecial && <img src={v8} alt="viku8" className="gif show" style={{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}/>}
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="animated-button join">Join</button>
        <button className="animated-button shop">Shop Now</button>
      </div>
    </div>
  );
}
