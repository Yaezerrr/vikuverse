import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSwipeable } from "react-swipeable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShopNow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSlidersH,
  faShoppingBag,
  faTrash,
  faHome,
  faHeart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

// Images & Media Imports
import viku45 from "./assets/images/viku45.png";
import viku46 from "./assets/images/viku46.png";
import viku48 from "./assets/images/viku48.jpg";
import viku49 from "./assets/images/viku49.jpg";
import viku51 from "./assets/images/viku51.jpg";
import viku52 from "./assets/images/viku52.jpg";
import viku54 from "./assets/images/viku54.jpg";
import viku55 from "./assets/images/viku55.jpg";
import viku56 from "./assets/images/viku56.jpg";
import viku57 from "./assets/images/viku57.jpg";
import viku59 from "./assets/images/viku59.png";
import viku60 from "./assets/images/viku60.png";
import viku61 from "./assets/images/viku61.png";
import viku62 from "./assets/images/viku62.png";
import viku63 from "./assets/images/viku63.png";
import viku64 from "./assets/images/viku64.png";
import viku65 from "./assets/images/viku65.png";
import viku66 from "./assets/images/viku66.png";
import viku67 from "./assets/images/viku67.png";
import viku77 from "./assets/images/viku77.png";
import viku78 from "./assets/images/viku78.png";
import viku79 from "./assets/images/viku79.png";
import viku80 from "./assets/images/viku80.jpg";
import viku81 from "./assets/images/viku81.mp4";
import viku82 from "./assets/images/viku82.gif";
import viku83 from "./assets/images/viku83.gif";
import viku84 from "./assets/images/viku84.gif";
import viku85 from "./assets/images/viku85.gif";
import viku86 from "./assets/images/viku86.gif";
import viku87 from "./assets/images/viku87.gif";
import viku88 from "./assets/images/viku88.gif";
import viku94 from "./assets/images/viku94.png";
import viku95 from "./assets/images/viku95.png";
import viku96 from "./assets/images/viku96.gif";
import viku99 from "./assets/images/viku99.gif";
import viku100 from "./assets/images/viku100.png";
import viku39 from "./assets/images/viku39.gif";
import viku41 from "./assets/images/viku41.gif";
import viku68 from "./assets/images/viku68.png";
import viku69 from "./assets/images/viku69.png";
import viku70 from "./assets/images/viku70.png";
import viku71 from "./assets/images/viku71.png";
import viku72 from "./assets/images/viku72.png";
import viku73 from "./assets/images/viku73.png";
import viku74 from "./assets/images/viku74.png";
import viku75 from "./assets/images/viku75.png";
import viku76 from "./assets/images/viku76.png";
import viku101 from "./assets/images/viku101.gif";

function ShopNow() {
  const videoRef = useRef(null);
  const topShelfRef = useRef(null);
  const collectiblesRef = useRef(null);
  const animeHoodiesRef = useRef(null);
  const editionSliderRef = useRef(null);

  const [currentMedia, setCurrentMedia] = useState("video");
  const [heroText, setHeroText] = useState("Solo Leveling Collection");
  const [narutoStep, setNarutoStep] = useState(0);
  const [onePieceStep, setOnePieceStep] = useState(0);
  const [jujutsuStep, setJujutsuStep] = useState(0);
  const [showViku94, setShowViku94] = useState(false);
  const [showViku95, setShowViku95] = useState(false);
  const [showViku87, setShowViku87] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);
  const [activeSection, setActiveSection] = useState("top-shelf");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const itemsPerSlide = useMemo(() => (window.innerWidth > 768 ? 5 : 2), []);

  const cleanRating = useCallback((rating) => rating.replace(/\s*\(\d+\)/, ""), []);

  const generateIds = useCallback((count, start) => {
    return Array.from({ length: count }, (_, i) => start + i);
  }, []);

  const collectiblesItems = useMemo(() => {
    const ids = generateIds(5, 1);
    return [
      { id: ids[0], name: "Collectible Figure", image: viku48, rating: cleanRating("★★★★☆ (40)"), priceNaira: "₦127,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[1], name: "Collectible Poster", image: viku49, rating: cleanRating("★★★★★ (45)"), priceNaira: "₦47,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[2], name: "Collectible Accessory", image: viku51, rating: cleanRating("★★★☆☆ (30)"), priceNaira: "₦31,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[3], name: "Collectible Decor", image: viku52, rating: cleanRating("★★★★☆ (35)"), priceNaira: "₦63,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[4], name: "Collectible Art", image: viku80, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦79,984", priceViku: "15", vikuImage: viku100 },
    ];
  }, [cleanRating]);

  const animeHoodiesItems = useMemo(() => {
    const ids = generateIds(9, 6);
    return [
      { id: ids[0], name: "Anime Hoodie 1", image: viku68, rating: cleanRating("★★★★☆ (40)"), priceNaira: "₦95,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[1], name: "Anime Hoodie 2", image: viku69, rating: cleanRating("★★★★★ (45)"), priceNaira: "₦103,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[2], name: "Anime Hoodie 3", image: viku70, rating: cleanRating("★★★☆☆ (30)"), priceNaira: "₦87,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[3], name: "Anime Hoodie 4", image: viku71, rating: cleanRating("★★★★☆ (35)"), priceNaira: "₦111,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[4], name: "Anime Hoodie 5", image: viku72, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦100,784", priceViku: "15", vikuImage: viku100 },
      { id: ids[5], name: "Anime Hoodie 6", image: viku73, rating: cleanRating("★★★★☆ (38)"), priceNaira: "₦94,384", priceViku: "10", vikuImage: viku100 },
      { id: ids[6], name: "Anime Hoodie 7", image: viku74, rating: cleanRating("★★★☆☆ (28)"), priceNaira: "₦89,584", priceViku: "5", vikuImage: viku100 },
      { id: ids[7], name: "Anime Hoodie 8", image: viku75, rating: cleanRating("★★★★☆ (42)"), priceNaira: "₦108,784", priceViku: "10", vikuImage: viku100 },
      { id: ids[8], name: "Anime Hoodie 9", image: viku76, rating: cleanRating("★★★★★ (47)"), priceNaira: "₦113,584", priceViku: "15", vikuImage: viku100 },
    ];
  }, [cleanRating]);

  const topShelfItems = useMemo(() => {
    const ids = generateIds(8, 15); // Increased count to 8
    return [
      { id: ids[0], name: "Naruto T-Shirt", images: [viku54, viku55, viku56], rating: cleanRating("★★★★☆ (23)"), priceNaira: "₦47,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[1], name: "Naruto Cap", images: [viku56, viku57, viku54], rating: cleanRating("★★★☆☆ (20)"), priceNaira: "₦31,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[2], name: "Naruto Poster", images: [viku57, viku54, viku55], rating: cleanRating("★★★★★ (25)"), priceNaira: "₦39,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[3], name: "Naruto Figure", images: [viku54, viku55, viku56], rating: cleanRating("★★★★☆ (28)"), priceNaira: "₦79,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[4], name: "Naruto Keychain", images: [viku55, viku56, viku57], rating: cleanRating("★★★☆☆ (15)"), priceNaira: "₦15,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[5], name: "Naruto Mug", images: [viku56, viku57, viku54], rating: cleanRating("★★★★☆ (22)"), priceNaira: "₦23,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[6], name: "Naruto Sticker", images: [viku57, viku54, viku55], rating: cleanRating("★★★★★ (30)"), priceNaira: "₦7,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[7], name: "Naruto Backpack", images: [viku54, viku55, viku56], rating: cleanRating("★★★★☆ (27)"), priceNaira: "₦55,984", priceViku: "10", vikuImage: viku100 },
    ];
  }, [cleanRating]);

  const editionItems = useMemo(() => {
    const ids = generateIds(9, 22);
    return [
      { id: ids[0], name: "Limited Figure", img: viku59, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦159,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[1], name: "Limited Poster", img: viku60, rating: cleanRating("★★★★☆ (45)"), priceNaira: "₦143,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[2], name: "Limited Charm", img: viku61, rating: cleanRating("★★★★☆ (40)"), priceNaira: "₦127,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[3], name: "Limited Art", img: viku62, rating: cleanRating("★★★★★ (55)"), priceNaira: "₦175,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[4], name: "Limited Keychain", img: viku63, rating: cleanRating("★★★☆☆ (35)"), priceNaira: "₦111,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[5], name: "Limited Statue", img: viku64, rating: cleanRating("★★★★☆ (42)"), priceNaira: "₦151,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[6], name: "Limited Print", img: viku65, rating: cleanRating("★★★★★ (48)"), priceNaira: "₦191,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[7], name: "Limited Collectible", img: viku66, rating: cleanRating("★★★★☆ (46)"), priceNaira: "₦139,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[8], name: "Limited Decor", img: viku67, rating: cleanRating("★★★★★ (52)"), priceNaira: "₦167,984", priceViku: "15", vikuImage: viku100 },
    ];
  }, [cleanRating]);

  const resetStates = useCallback(() => {
    setCurrentMedia("done");
    setNarutoStep(0);
    setOnePieceStep(0);
    setJujutsuStep(0);
    setShowViku94(false);
    setShowViku95(false);
    setShowViku87(false);
    setTextAnimation(false);
  }, []);

  const handleDotClick = useCallback(
    (index) => {
      resetStates();
      setActiveCollection(index);
      switch (index) {
        case 0:
          setCurrentMedia("video");
          setHeroText("Solo Leveling Collection");
          setTextAnimation(true);
          break;
        case 1:
          setNarutoStep(1);
          setHeroText("NARUTO COLLECTION");
          setTextAnimation(true);
          break;
        case 2:
          setOnePieceStep(1);
          setHeroText("ONE PIECE COLLECTION");
          setTextAnimation(true);
          break;
        case 3:
          setJujutsuStep(1);
          setHeroText("Jujutsu Kaisen & Demon Slayer Collection");
          setTextAnimation(true);
          break;
        default:
          break;
      }
    },
    [resetStates]
  );

  const handleHeaderClick = useCallback(
    (section) => {
      setActiveSection(section);
      const ref =
        section === "top-shelf"
          ? topShelfRef
          : section === "limited"
          ? editionSliderRef
          : section === "collectibles"
          ? collectiblesRef
          : animeHoodiesRef;
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  const handleAddToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, cartId: Date.now(), quantity: 1 }];
    });
    console.log(`Added ${item.name} to cart`);
  }, []);

  const handleRemoveFromCart = useCallback((cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  }, []);

  const handleQuantityChange = useCallback((cartId, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  }, []);

  const handleCheckout = useCallback(() => {
    console.log("Proceeding to checkout");
    setCartItems([]);
    setShowCart(false);
  }, []);

  const toggleCart = useCallback(() => {
    setShowCart((prev) => !prev);
  }, []);

  const calculateTotal = useCallback(() => {
    const nairaTotal = cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.priceNaira.replace("₦", "").replace(",", ""));
        return total + price * item.quantity;
      }, 0)
      .toLocaleString("en-NG", { minimumFractionDigits: 0 });
    const vikuTotal = cartItems
      .reduce((total, item) => total + parseFloat(item.priceViku) * item.quantity, 0)
      .toFixed(0);
    return { nairaTotal: `₦${nairaTotal}`, vikuTotal };
  }, [cartItems]);

  useEffect(() => {
    const preloadImages = (items) => {
      items.forEach((item) => {
        if (item.image) {
          const img = new Image();
          img.src = item.image;
        } else if (item.images) {
          item.images.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        } else if (item.img) {
          const img = new Image();
          img.src = item.img;
        }
        const vikuImg = new Image();
        vikuImg.src = item.vikuImage;
      });
    };
    preloadImages(collectiblesItems);
    preloadImages(animeHoodiesItems);
    preloadImages(topShelfItems);
    preloadImages(editionItems);
    const viku101Img = new Image();
    viku101Img.src = viku101;
  }, [collectiblesItems, animeHoodiesItems, topShelfItems, editionItems]);

  useEffect(() => {
    const timers = [];
    if (activeCollection === 0) {
      if (currentMedia === "video" && videoRef.current) {
        videoRef.current.onended = () => setCurrentMedia("gif1");
      } else if (currentMedia === "gif1") {
        timers.push(setTimeout(() => setCurrentMedia("gif2"), 1500));
      } else if (currentMedia === "gif2") {
        timers.push(setTimeout(() => setCurrentMedia("gif3"), 1500));
      } else if (currentMedia === "gif3") {
        timers.push(
          setTimeout(() => {
            setCurrentMedia("done");
            setHeroText("NARUTO COLLECTION");
            setTextAnimation(true);
            setNarutoStep(1);
            setActiveCollection(1);
          }, 1500)
        );
      }
    } else if (activeCollection === 1) {
      if (narutoStep === 1) {
        timers.push(setTimeout(() => setNarutoStep(2), 3000));
      } else if (narutoStep === 2) {
        timers.push(setTimeout(() => setNarutoStep(3), 2000));
      } else if (narutoStep === 3) {
        setShowViku94(true);
        setShowViku95(true);
        timers.push(
          setTimeout(() => {
            setShowViku94(false);
            setShowViku95(false);
            setHeroText("ONE PIECE COLLECTION");
            setTextAnimation(true);
            setNarutoStep(0);
            setOnePieceStep(1);
            setActiveCollection(2);
          }, 3000)
        );
      }
    } else if (activeCollection === 2) {
      if (onePieceStep === 1) {
        timers.push(setTimeout(() => setOnePieceStep(2), 3000));
      } else if (onePieceStep === 2) {
        timers.push(setTimeout(() => setOnePieceStep(3), 1500));
      } else if (onePieceStep === 3) {
        timers.push(
          setTimeout(() => {
            setHeroText("Jujutsu Kaisen & Demon Slayer Collection");
            setTextAnimation(true);
            setOnePieceStep(0);
            setJujutsuStep(1);
            setActiveCollection(3);
          }, 3000)
        );
      }
    } else if (activeCollection === 3) {
      if (jujutsuStep === 1) {
        timers.push(
          setTimeout(() => {
            setJujutsuStep(2);
            setShowViku87(true);
          }, 3000)
        );
      } else if (jujutsuStep === 2) {
        timers.push(setTimeout(() => setJujutsuStep(3), 3000));
      }
    }
    return () => timers.forEach(clearTimeout);
  }, [activeCollection, currentMedia, narutoStep, onePieceStep, jujutsuStep]);

  // Swipe handlers for edition slider
  const swipeHandlers = useSwipeable({
    onSwiping: ({ deltaX }) => {
      if (editionSliderRef.current) {
        const slick = editionSliderRef.current;
        const currentSlide = slick.innerSlider.state.currentSlide;
        const totalSlides = editionItems.length - itemsPerSlide;
        if ((deltaX > 0 && currentSlide === 0) || (deltaX < 0 && currentSlide >= totalSlides)) {
          return;
        }
        const translateX = deltaX * -0.5;
        slick.innerSlider.list.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
    },
    onSwipedLeft: () => {
      if (editionSliderRef.current) {
        editionSliderRef.current.slickNext();
      }
    },
    onSwipedRight: () => {
      if (editionSliderRef.current) {
        editionSliderRef.current.slickPrev();
      }
    },
    onSwiped: () => {
      if (editionSliderRef.current) {
        editionSliderRef.current.innerSlider.list.style.transition = "transform 0.3s ease-in-out";
        editionSliderRef.current.innerSlider.list.style.transform = "";
      }
    },
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const MemoizedCollectibleItem = React.memo(({ item }) => (
    <div className="collectible-item" style={{ transform: "translateZ(0)" }}>
      <div className="image-blur-wrapper">
        <img src={item.image} alt={item.name} className="collectible-image" loading="lazy" style={{ transform: "translateZ(0)" }} />
      </div>
      <div className="collectible-info product-info">
        <span className="rating" style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.3)" }}>{item.rating}</span>
        <p className="title">{item.name}</p>
        <p className="price">
          {item.priceNaira} / <img src={item.vikuImage} alt="Viku Currency" className="viku-currency" /> {item.priceViku}
        </p>
        <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  ));

  const MemoizedAnimeHoodieItem = React.memo(({ item }) => (
    <div className="anime-hoodies-item" style={{ transform: "translateZ(0)" }}>
      <div className="anime-hoodies-wrapper">
        <div className="image-blur-wrapper">
          <img src={item.image} alt={item.name} className="anime-hoodies-image" loading="lazy" style={{ transform: "translateZ(0)" }} />
        </div>
        <div className="anime-hoodies-info product-info">
          <span className="rating" style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.3)" }}>{item.rating}</span>
          <p className="title">{item.name}</p>
          <p className="price">
            {item.priceNaira} / <img src={item.vikuImage} alt="Viku Currency" className="viku-currency" /> {item.priceViku}
          </p>
          <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));

  const MemoizedTopShelfItem = React.memo(({ item }) => (
    <div className="product-item">
      <div className="product-wrapper" onClick={() => handleAddToCart(item)}>
        <div className="product-image">
          <div className="image-slider">
            {item.images.map((img, imgIdx) => (
              <div key={imgIdx} className="image-blur-wrapper">
                <img src={img} alt={`${item.name}-${imgIdx}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-info">
        <span className="rating" style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.3)" }}>{item.rating}</span>
        <p className="title">{item.name}</p>
        <p className="price">
          {item.priceNaira} / <img src={item.vikuImage} alt="Viku Currency" className="viku-currency" /> {item.priceViku}
        </p>
        <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  ));

  const MemoizedEditionItem = React.memo(({ item }) => (
    <div className="edition-item" style={{ transform: "translateZ(0)" }}>
      <div className="edition-wrapper">
        <div className="image-blur-wrapper">
          <img src={item.img} alt={item.name} className="edition-image" loading="lazy" style={{ transform: "translateZ(0)" }} />
        </div>
        <div className="edition-info product-info">
          <span className="rating" style={{ textShadow: "0 0 2px rgba(0, 0, 0, 0.3)" }}>{item.rating}</span>
          <p className="title">{item.name}</p>
          <p className="price">
            {item.priceNaira} / <img src={item.vikuImage} alt="Viku Currency" className="viku-currency" /> {item.priceViku}
          </p>
          <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));

  const slickSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: itemsPerSlide,
      slidesToScroll: itemsPerSlide,
      autoplay: true,
      autoplaySpeed: window.innerWidth > 768 ? 4000 : 3000,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      swipeToSlide: true,
      touchThreshold: 10,
      cssEase: "ease-in-out",
      arrows: false,
      appendDots: (dots) => (
        <div>
          <ul className="slider-dots">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <button className="slider-dot" aria-label={`Go to slide ${i + 1}`}></button>
      ),
    }),
    [itemsPerSlide]
  );

  const editionSlickSettings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: itemsPerSlide,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      swipeToSlide: true,
      touchThreshold: 15,
      cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
      arrows: false,
      centerMode: false,
      variableWidth: false,
      appendDots: (dots) => (
        <div>
          <ul className="slider-dots">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <button className="slider-dot" aria-label={`Go to slide ${i + 1}`}></button>
      ),
    }),
    [itemsPerSlide]
  );

  return (
    <div className="shopnow-page" style={{ minHeight: "calc(100vh + 300px)" }}>
      <div className="content">
        <div className="header-container">
          <div className="header-logo">
            <img src={viku46} alt="Header Logo" loading="lazy" />
          </div>
          <button className="cart-btn nav-btn-blur" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBag} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>}
          </button>
        </div>
        <div className="nav-bar nav-blur">
          <Link to="/" className="home-btn nav-btn-blur">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <button className="cart-btn nav-btn-blur" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBag} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>}
          </button>
          <div className="header-logo">
            <img src={viku46} alt="Header Logo" loading="lazy" />
          </div>
          <button className="like-btn nav-btn-blur">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="profile-btn nav-btn-blur">
            <img src={viku100} alt="Profile" loading="lazy" />
          </button>
        </div>
        {showCart && (
          <div className="cart-dropdown">
            {cartItems.length >= 4 && (
              <img
                src={viku101}
                alt="Cart Background GIF"
                className="cart-background-gif"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              />
            )}
            <div className="cart-content">
              <h3>Your Cart</h3>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.cartId} className="cart-item">
                      <span className="cart-item-title">{item.name}</span>
                      <div className="cart-item-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.cartId, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="cart-item-quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.cartId, 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                          className="remove-from-cart"
                          onClick={() => handleRemoveFromCart(item.cartId)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                      <span className="cart-item-price">
                        {item.priceNaira} x {item.quantity} /{" "}
                        <img src={item.vikuImage} alt="Viku Currency" className="viku-currency" />{" "}
                        {(parseFloat(item.priceViku) * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  ))}
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>
                      {calculateTotal().nairaTotal} / <img src={viku100} alt="Viku Currency" className="viku-currency" />{" "}
                      {calculateTotal().vikuTotal}
                    </span>
                  </div>
                  <div className="cart-buttons">
                    <button className="clear-cart-btn" onClick={() => setCartItems([])}>
                      Clear Cart
                    </button>
                    <button className="checkout-btn" onClick={handleCheckout}>
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <div className="search-wrapper">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search products..." />
          </div>
          <button className="filter-btn">
            <FontAwesomeIcon icon={faSlidersH} />
          </button>
        </div>
        <div className="hero-section">
          {activeCollection === 0 && currentMedia === "video" && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="hero-media"
              key="video"
            >
              <source src={viku81} type="video/mp4" />
            </video>
          )}
          {activeCollection === 0 && currentMedia === "gif1" && (
            <img src={viku88} alt="gif1" className="hero-media" loading="lazy" key="gif1" />
          )}
          {activeCollection === 0 && currentMedia === "gif2" && (
            <img src={viku84} alt="gif2" className="hero-media" loading="lazy" key="gif2" />
          )}
          {activeCollection === 0 && currentMedia === "gif3" && (
            <img src={viku82} alt="gif3" className="hero-media" loading="lazy" key="gif3" />
          )}
          {activeCollection === 1 && narutoStep === 1 && (
            <img
              src={viku85}
              alt="viku85"
              className="hero-media naruto-gif"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="naruto-step-1"
            />
          )}
          {activeCollection === 1 && narutoStep === 2 && (
            <img
              src={viku83}
              alt="viku83"
              className="hero-media naruto-gif"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="naruto-step-2"
            />
          )}
          {activeCollection === 1 && narutoStep === 3 && showViku94 && (
            <img src={viku94} alt="viku94" className="hero-png-right" loading="lazy" key="viku94" />
          )}
          {activeCollection === 1 && narutoStep === 3 && showViku95 && (
            <img src={viku95} alt="viku95" className="hero-png-left" loading="lazy" key="viku95" />
          )}
          {activeCollection === 2 && onePieceStep === 1 && (
            <img
              src={viku39}
              alt="viku39"
              className="hero-media one-piece-gif"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="onepiece-step-1"
            />
          )}
          {activeCollection === 2 && onePieceStep === 2 && (
            <img
              src={viku96}
              alt="viku96"
              className="hero-media one-piece-gif"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="onepiece-step-2"
            />
          )}
          {activeCollection === 2 && onePieceStep === 3 && (
            <img
              src={viku41}
              alt="viku41"
              className="hero-media one-piece-gif fade-out"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="onepiece-step-3"
            />
          )}
          {activeCollection === 3 && jujutsuStep === 1 && (
            <img
              src={viku86}
              alt="viku86"
              className="hero-media jujutsu-gif fade-out"
              loading="lazy"
              style={{
                zIndex: 2,
                width: "150px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translateZ(0)",
              }}
              key="jujutsu-step-1"
            />
          )}
          {activeCollection === 3 && jujutsuStep >= 2 && showViku87 && (
            <>
              <img
                src={viku87}
                alt="viku87"
                className="hero-png-right jujutsu-gif"
                loading="lazy"
                style={{ zIndex: 3 }}
                key="viku87"
              />
              <img
                src={viku99}
                alt="viku99"
                className="hero-media jujutsu-gif viku99-animation"
                loading="lazy"
                style={{
                  zIndex: 4,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translateZ(0)",
                  objectFit: "cover",
                }}
                key="viku99"
              />
            </>
          )}
          <h1 className={textAnimation ? "hero-text-animate" : ""}>{heroText}</h1>
          <div className="slick-dots">
            {["Solo Leveling", "Naruto", "One Piece", "Jujutsu Kaisen & Demon Slayer"].map(
              (collection, index) => (
                <button
                  key={`collection-${index}`}
                  className={`slick-dot ${activeCollection === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to ${collection} collection`}
                ></button>
              )
            )}
          </div>
        </div>
        <div className="quick-categories">
          <div className="quick-categories-header">
            <h2>Quick Categories</h2>
          </div>
          <div className="category-grid">
            {[
              { name: "Figures", img: viku48 },
              { name: "Apparel", img: viku80 },
              { name: "Accessories", img: viku49 },
              { name: "Decor", img: viku51 },
              { name: "Stickers & Posters", img: viku52 },
            ].map((cat, idx) => (
              <div key={`category-${idx}`} className="category-wrapper">
                <div className="category-item" style={{ backgroundImage: `url(${cat.img})` }}>
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="top-shelf" ref={topShelfRef}>
          <div className="top-shelf-header">
            <div className="header-wrapper top-shelf-title">
              <h1 onClick={() => handleHeaderClick("top-shelf")}>Top Shelf</h1>
              {activeSection === "top-shelf" && (
                <img src={viku45} alt="Bubble" className="water-bubble" loading="lazy" />
              )}
            </div>
            <div className="header-wrapper limited-title">
              <h1 onClick={() => handleHeaderClick("limited")}>Limited</h1>
              {activeSection === "limited" && (
                <img src={viku45} alt="Bubble" className="water-bubble" loading="lazy" />
              )}
            </div>
            <div className="header-wrapper collectibles-title">
              <h1 onClick={() => handleHeaderClick("collectibles")}>Collectibles</h1>
              {activeSection === "collectibles" && (
                <img src={viku45} alt="Bubble" className="water-bubble" loading="lazy" />
              )}
            </div>
            {activeSection === null && (
              <img
                src={viku45}
                alt="Bubble"
                className="water-bubble float-edge-to-edge"
                loading="lazy"
              />
            )}
          </div>
          {activeSection === "top-shelf" && (
            <div className="product-grid">
              {topShelfItems.map((item) => (
                <MemoizedTopShelfItem key={item.id} item={item} />
              ))}
            </div>
          )}
          {activeSection === "limited" && (
            <div className="edition" ref={editionSliderRef}>
              <div {...swipeHandlers}>
                <Slider {...editionSlickSettings} className="edition-slider">
                  {editionItems.map((item) => (
                    <MemoizedEditionItem key={item.id} item={item} />
                  ))}
                </Slider>
              </div>
            </div>
          )}
          {activeSection === "collectibles" && (
            <div className="collectibles-section" ref={collectiblesRef}>
              <Slider {...slickSettings} className="collectibles-slider">
                {collectiblesItems.map((item) => (
                  <MemoizedCollectibleItem key={item.id} item={item} />
                ))}
              </Slider>
            </div>
          )}
        </div>
        <div className="anime-hoodies" ref={animeHoodiesRef} style={{ minHeight: "600px" }}>
          <h2 className="anime-hoodies-title">Anime Hoodies</h2>
          <Slider {...slickSettings} className="anime-hoodies-slider">
            {animeHoodiesItems.map((item) => (
              <MemoizedAnimeHoodieItem key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ShopNow;