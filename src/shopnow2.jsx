import React, { useRef, useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSwipeable } from "react-swipeable";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTheaterMasks, FaUsers, FaHeart, FaComment, FaEye, FaApple, FaGooglePlay } from "react-icons/fa";
import "./shopnow2.css";
import "./shopnow3.css";
import viku14 from "./assets/images/viku14.png";
import viku45 from "./assets/images/viku45.png";
import viku46 from "./assets/images/viku46.png";
import viku48 from "./assets/images/viku48.jpg";
import viku49 from "./assets/images/viku49.jpg";
import viku51 from "./assets/images/viku51.jpg";
import viku52 from "./assets/images/viku52.jpg";
import viku65 from "./assets/images/viku65.png";
import viku66 from "./assets/images/viku66.png";
import viku67 from "./assets/images/viku67.png";
import viku68 from "./assets/images/viku68.png";
import viku69 from "./assets/images/viku69.png";
import viku70 from "./assets/images/viku70.png";
import viku71 from "./assets/images/viku71.png";
import viku72 from "./assets/images/viku72.png";
import viku73 from "./assets/images/viku73.png";
import viku74 from "./assets/images/viku74.png";
import viku75 from "./assets/images/viku75.png";
import viku76 from "./assets/images/viku76.png";
import viku80 from "./assets/images/viku80.jpg";
import viku85 from "./assets/images/viku85.gif";
import viku100 from "./assets/images/viku100.png";
import viku102 from "./assets/images/viku102.jpg";
import viku103 from "./assets/images/viku103.png";
import viku104 from "./assets/images/viku104.gif";
import viku105 from "./assets/images/viku105.jpg";
import viku106 from "./assets/images/viku106.jpg";
import viku107 from "./assets/images/viku107.jpg";
import viku108 from "./assets/images/viku108.jpg";
import viku109 from "./assets/images/viku109.jpg";
import viku110 from "./assets/images/viku110.jpg";
import viku111 from "./assets/images/viku111.png";
import viku112 from "./assets/images/viku112.png";
import viku113 from "./assets/images/viku113.png";
import viku114 from "./assets/images/viku114.png";
import viku117 from "./assets/images/viku117.mp4";
import viku118 from "./assets/images/viku118.png";
import viku119 from "./assets/images/viku119.png";
import viku120 from "./assets/images/viku120.png";

const ShopNow2 = ({
  activeSection,
  collectiblesRef,
  newReleaseRef,
  animeHoodiesRef,
  itemsPerSlide,
  handleAddToCart,
  cleanRating,
  generateIds,
}) => {
  const collectiblesSliderRef = useRef(null);
  const animeHoodiesSliderRef = useRef(null);
  const eventsSliderRef = useRef(null);
  const cubeRef = useRef(null);
  const dragonRef = useRef(null);
  const mangaRef = useRef(null);
  const mangaCubeRef = useRef(null);
  const curatedRef = useRef(null);
  const featuredH2Ref = useRef(null);
  const mostWantedH2Ref = useRef(null);
  const [currentFace, setCurrentFace] = useState(0);
  const [currentMangaFace, setCurrentMangaFace] = useState(0);
  const [isNewReleaseVisible, setIsNewReleaseVisible] = useState(false);
  const [dragonDirection, setDragonDirection] = useState("right");
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [curatedTab, setCuratedTab] = useState("Featured");
  const [glassBallPosition, setGlassBallPosition] = useState({ left: 0 });

  useEffect(() => {
    const updateGlassBallPosition = () => {
      const featuredRect = featuredH2Ref.current?.getBoundingClientRect();
      const mostWantedRect = mostWantedH2Ref.current?.getBoundingClientRect();
      const curatedHeaderRect = curatedRef.current?.querySelector(".curated-header")?.getBoundingClientRect();

      if (featuredRect && mostWantedRect && curatedHeaderRect) {
        const glassBallWidth = window.innerWidth <= 768 ? 180 : 300;
        let position = curatedTab === "Featured"
          ? { left: featuredRect.left - curatedHeaderRect.left + (featuredRect.width / 2) - (glassBallWidth / 2) }
          : { left: mostWantedRect.left - curatedHeaderRect.left + (mostWantedRect.width / 2) - (glassBallWidth / 2) };

        if (curatedTab === "Deals" && window.innerWidth > 768) {
          position = { left: position.left - 20 };
        }

        setGlassBallPosition(position);
      }
    };

    updateGlassBallPosition();
    window.addEventListener("resize", updateGlassBallPosition);

    return () => window.removeEventListener("resize", updateGlassBallPosition);
  }, [curatedTab]);

  const collectiblesItems = useMemo(() => {
    const ids = generateIds(5, 1);
    return [
      { id: ids[0], name: "Collectible Figure", image: viku48, rating: cleanRating("★★★★☆ (40)"), priceNaira: "₦127,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[1], name: "Collectible Poster", image: viku49, rating: cleanRating("★★★★★ (45)"), priceNaira: "₦47,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[2], name: "Collectible Accessory", image: viku51, rating: cleanRating("★★★☆☆ (30)"), priceNaira: "₦31,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[3], name: "Collectible Decor", image: viku52, rating: cleanRating("★★★★☆ (35)"), priceNaira: "₦63,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[4], name: "Collectible Art", image: viku80, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦79,984", priceViku: "15", vikuImage: viku100 },
    ];
  }, [cleanRating, generateIds]);

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
  }, [cleanRating, generateIds]);

  const newReleaseItems = useMemo(() => {
    const ids = generateIds(6, 31);
    return [
      { id: ids[0], name: "New Release Print", image: viku65, rating: cleanRating("★★★★★ (48)"), priceNaira: "₦191,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[1], name: "New Release Collectible", image: viku66, rating: cleanRating("★★★★☆ (46)"), priceNaira: "₦139,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[2], name: "New Release Decor", image: viku67, rating: cleanRating("★★★★★ (52)"), priceNaira: "₦167,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[3], name: "New Release Hoodie", image: viku68, rating: cleanRating("★★★★☆ (40)"), priceNaira: "₦95,984", priceViku: "10", vikuImage: viku100 },
      { id: ids[4], name: "New Release Shirt", image: viku69, rating: cleanRating("★★★★★ (45)"), priceNaira: "₦103,984", priceViku: "15", vikuImage: viku100 },
      { id: ids[5], name: "New Release Accessory", image: viku70, rating: cleanRating("★★★☆☆ (30)"), priceNaira: "₦87,984", priceViku: "5", vikuImage: viku100 },
    ];
  }, [cleanRating, generateIds]);

  const mangaItems = useMemo(() => {
    const ids = generateIds(6, 37);
    return [
      { id: ids[0], name: "Hunter x Hunter", image: viku109, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦45,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[1], name: "Bleach", image: viku110, rating: cleanRating("★★★★☆ (45)"), priceNaira: "₦49,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[2], name: "Demon Slayer", image: viku111, rating: cleanRating("★★★★★ (55)"), priceNaira: "₦47,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[3], name: "One Piece", image: viku112, rating: cleanRating("★★★★☆ (48)"), priceNaira: "₦50,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[4], name: "Solo Leveling", image: viku113, rating: cleanRating("★★★★★ (52)"), priceNaira: "₦48,984", priceViku: "5", vikuImage: viku100 },
      { id: ids[5], name: "Death Note", image: viku114, rating: cleanRating("★★★★☆ (47)"), priceNaira: "₦46,984", priceViku: "5", vikuImage: viku100 },
    ];
  }, [cleanRating, generateIds]);

  const curatedItems = useMemo(() => {
    const ids = generateIds(8, 43);
    return [
      { id: ids[0], name: "Featured Figurine", image: viku48, rating: cleanRating("★★★★★ (50)"), priceNaira: "₦150,000", priceViku: "12", vikuImage: viku100, category: "Featured" },
      { id: ids[1], name: "Featured Poster", image: viku49, rating: cleanRating("★★★★☆ (45)"), priceNaira: "₦60,000", priceViku: "6", vikuImage: viku100, category: "Featured" },
      { id: ids[2], name: "Featured Accessory", image: viku51, rating: cleanRating("★★★★★ (48)"), priceNaira: "₦40,000", priceViku: "4", vikuImage: viku100, category: "Featured" },
      { id: ids[3], name: "Featured Statue", image: viku52, rating: cleanRating("★★★★☆ (42)"), priceNaira: "₦120,000", priceViku: "10", vikuImage: viku100, category: "Featured" },
      { id: ids[4], name: "Most Wanted Collectible", image: viku65, rating: cleanRating("★★★★★ (55)"), priceNaira: "₦200,000", priceViku: "15", vikuImage: viku100, category: "Deals" },
      { id: ids[5], name: "Most Wanted Art", image: viku80, rating: cleanRating("★★★★☆ (50)"), priceNaira: "₦100,000", priceViku: "10", vikuImage: viku100, category: "Deals" },
      { id: ids[6], name: "Most Wanted Poster", image: viku49, rating: cleanRating("★★★★★ (52)"), priceNaira: "₦55,000", priceViku: "5", vikuImage: viku100, category: "Deals" },
      { id: ids[7], name: "Most Wanted Figurine", image: viku48, rating: cleanRating("★★★★☆ (47)"), priceNaira: "₦130,000", priceViku: "12", vikuImage: viku100, category: "Deals" },
    ];
  }, [cleanRating, generateIds]);

  const eventsItems = useMemo(() => [
    {
      id: 1,
      image: viku102,
      eventName: "Naija Anime Fest",
      price: "₦25,000",
      details: {
        date: "October 15, 2025",
        time: "6:00 PM",
        venue: "Eko Hotel, Lagos, Nigeria",
        themes: ["Shonen Showdown", "Juju Jutsu"],
        attendees: 500,
      },
    },
    {
      id: 2,
      image: viku103,
      eventName: "Lagos Manga Bash",
      price: "₦30,000",
      details: {
        date: "November 20, 2025",
        time: "4:00 PM",
        venue: "Abuja Convention Center, Nigeria",
        themes: ["Isekai Adventure", "Yoruba Yokai"],
        attendees: 300,
      },
    },
    {
      id: 3,
      image: viku105,
      eventName: "Anime Owam bojangles",
      price: "₦28,000",
      details: {
        date: "December 5, 2025",
        time: "5:00 PM",
        venue: "Ibadan Cultural Hall, Nigeria",
        themes: ["Mecha Mania", "Afro Anime Fusion"],
        attendees: 400,
      },
    },
    {
      id: 4,
      image: viku106,
      eventName: "Yoruba Cosplay Carnival",
      price: "₦22,000",
      details: {
        date: "January 10, 2026",
        time: "3:00 PM",
        venue: "Lekki Events Center, Nigeria",
        themes: ["Fantasy Quest", "Naija Ninja Saga"],
        attendees: 350,
      },
    },
    {
      id: 5,
      image: viku107,
      eventName: "Abuja Anime Odyssey",
      price: "₦27,000",
      details: {
        date: "February 15, 2026",
        time: "7:00 PM",
        venue: "Transcorp Hilton, Abuja, Nigeria",
        themes: ["Shojo Sparkle", "Igbo Mythic Tales"],
        attendees: 450,
      },
    },
  ], []);

  const mobileEventsItems = useMemo(() => [
    ...eventsItems,
    ...eventsItems.map((item) => ({
      ...item,
      id: item.id + 5,
    })),
  ], [eventsItems]);

  useEffect(() => {
    const preloadImages = (items) => {
      items.forEach((item) => {
        const img = new Image();
        img.src = item.image;
        if (item.vikuImage) {
          const vikuImg = new Image();
          vikuImg.src = item.vikuImage;
        }
      });
    };
    preloadImages(collectiblesItems);
    preloadImages(animeHoodiesItems);
    preloadImages(newReleaseItems);
    preloadImages(mangaItems);
    preloadImages(curatedItems);
    preloadImages(eventsItems);
    const dragonImg = new Image();
    dragonImg.src = viku104;
    const profileImg = new Image();
    profileImg.src = viku85;
    const postImg = new Image();
    postImg.src = viku108;
    const video = document.createElement("video");
    video.src = viku117;
    const viku46Img = new Image();
    viku46Img.src = viku46;
    const viku118Img = new Image();
    viku118Img.src = viku118;
    const viku119Img = new Image();
    viku119Img.src = viku119;
    const viku120Img = new Image();
    viku120Img.src = viku120;
    const viku45Img = new Image();
    viku45Img.src = viku45;
    const viku14Img = new Image();
    viku14Img.src = viku14;
  }, [collectiblesItems, animeHoodiesItems, newReleaseItems, mangaItems, curatedItems, eventsItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNewReleaseVisible(true);
        } else {
          setIsNewReleaseVisible(false);
          setDragonDirection("right");
        }
      },
      { threshold: 0.1 }
    );

    if (newReleaseRef.current) {
      observer.observe(newReleaseRef.current);
    }

    return () => {
      if (newReleaseRef.current) {
        observer.unobserve(newReleaseRef.current);
      }
    };
  }, [newReleaseRef]);

  const collectiblesSwipeHandlers = useSwipeable({
    onSwipedLeft: () => collectiblesSliderRef.current?.slickNext(),
    onSwipedRight: () => collectiblesSliderRef.current?.slickPrev(),
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const animeHoodiesSwipeHandlers = useSwipeable({
    onSwipedLeft: () => animeHoodiesSliderRef.current?.slickNext(),
    onSwipedRight: () => animeHoodiesSliderRef.current?.slickPrev(),
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const eventsSwipeHandlers = useSwipeable({
    onSwipedLeft: () => eventsSliderRef.current?.slickNext(),
    onSwipedRight: () => eventsSliderRef.current?.slickPrev(),
    delta: 50,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const newReleaseSwipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentFace((prev) => (prev + 1) % 6);
    },
    onSwipedRight: () => {
      setCurrentFace((prev) => (prev - 1 + 6) % 6);
    },
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const mangaSwipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentMangaFace((prev) => (prev + 1) % 6);
    },
    onSwipedRight: () => {
      setCurrentMangaFace((prev) => (prev - 1 + 6) % 6);
    },
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const slickSettings = useMemo(
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

  const eventsSettings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      swipe: true,
      swipeToSlide: true,
      touchThreshold: 100,
      cssEase: "linear",
      useCSS: true,
      useTransform: true,
      lazyLoad: "ondemand",
      arrows: false,
      centerMode: false,
      variableWidth: true,
      beforeChange: () => {
        document.querySelector(".events-slider .slick-track")?.classList.add("sliding");
      },
      afterChange: (current) => {
        setCurrentEventSlide(current);
        document.querySelector(".events-slider .slick-track")?.classList.remove("sliding");
      },
      appendDots: (dots) => (
        <div>
          <ul className="slider-dots">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <button className="slider-dot" aria-label={`Go to slide ${i + 1}`}></button>
      ),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
            centerPadding: "0px",
            variableWidth: false,
            touchThreshold: 100,
            speed: 300,
            cssEase: "linear",
            swipe: true,
            touchMove: true,
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
            infinite: false,
          },
        },
      ],
    }),
    []
  );

  const MemoizedCollectibleItem = React.memo(({ item }) => (
    <div className="collectible-item">
      <div className="image-blur-wrapper">
        <img src={item.image} alt={item.name} className="collectible-image" loading="lazy" />
      </div>
      <div className="collectible-info product-info">
        <span className="rating">{item.rating}</span>
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
    <div className="anime-hoodies-item">
      <div className="image-blur-wrapper">
        <img src={item.image} alt={item.name} className="anime-hoodies-image" loading="lazy" />
      </div>
      <div className="anime-hoodies-info product-info">
        <span className="rating">{item.rating}</span>
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

  const MemoizedNewReleaseItem = React.memo(({ item, index }) => (
    <div className={`cube-face cube-face-${index}`}>
      <div className="image-blur-wrapper">
        <img src={item.image} alt={item.name} className="new-release-image" loading="lazy" />
      </div>
      <div className={`new-release-info product-info ${index === currentFace ? "visible" : "hidden"}`}>
        <span className="rating">{item.rating}</span>
        <ul className="cube-dots">
          {newReleaseItems.map((_, dotIndex) => (
            <li key={dotIndex}>
              <button
                className={`cube-dot ${dotIndex === currentFace ? "active" : ""}`}
                onClick={() => setCurrentFace(dotIndex)}
                aria-label={`Go to cube face ${dotIndex + 1}`}
              ></button>
            </li>
          ))}
        </ul>
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

  const MemoizedMangaItem = React.memo(({ item, index }) => (
    <div className={`cube-face cube-face-${index}`}>
      <div className="image-blur-wrapper">
        <img src={item.image} alt={item.name} className="manga-image" loading="lazy" />
      </div>
      <div className={`manga-info product-info ${index === currentMangaFace ? "visible" : "hidden"}`}>
        <span className="rating">{item.rating}</span>
        <ul className="cube-dots">
          {mangaItems.map((_, dotIndex) => (
            <li key={dotIndex}>
              <button
                className={`cube-dot ${dotIndex === currentMangaFace ? "active" : ""}`}
                onClick={() => setCurrentMangaFace(dotIndex)}
                aria-label={`Go to cube face ${dotIndex + 1}`}
              ></button>
            </li>
          ))}
        </ul>
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

  const MemoizedCuratedItem = React.memo(({ item }) => (
    <div className="curated-item">
      <div className="curated-wrapper">
        <div className="image-blur-wrapper">
          <img src={item.image} alt={item.name} className="curated-image" loading="lazy" />
        </div>
      </div>
      <div className="curated-info product-info">
        <span className="rating">{item.rating}</span>
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

  const MemoizedEventsItem = React.memo(({ item }) => (
    <div className="magazine-item">
      <div className="magazine-flip">
        <img
          src={item.image}
          alt={`Event ${item.eventName}`}
          className="magazine-image"
          loading="lazy"
          width="250"
          height="400"
          sizes="(max-width: 768px) 200px, 250px"
        />
        <div className="event-price-container">
          <span className="event-price">{item.price}</span>
        </div>
        <div className="event-like-container">
          <FaHeart className="event-like-icon" />
        </div>
        <div className="event-details-container">
          <h3 className="event-name">{item.eventName}</h3>
          <p>
            <FaCalendarAlt className="event-icon" />
            <span>{item.details.date}</span>
          </p>
          <p>
            <FaClock className="event-icon" />
            <span>{item.details.time}</span>
          </p>
          <p>
            <FaMapMarkerAlt className="event-icon" />
            <span>{item.details.venue}</span>
          </p>
          <p>
            <FaTheaterMasks className="event-icon" />
            <span>
              Themes:{" "}
              {item.details.themes.map((theme, index) => (
                <span key={index} className="event-theme">
                  {theme}
                  {index < item.details.themes.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </p>
          <p>
            <FaUsers className="event-icon" />
            <span>Attendees: {item.details.attendees}</span>
          </p>
        </div>
      </div>
    </div>
  ));

  const handleTabChange = (tab) => {
    setCuratedTab(tab);
  };

  // Define lists for anime and about-us
  const animeListItems = [
    "Attack on Titan",
    "Jujutsu Kaisen",
    "Demon Slayer",
    "Naruto",
    "Bleach",
    "One Piece",
    "Dragon Ball Z",
  ];

  const aboutUsListItems = [
    "About",
    "FAQ",
    "Disclaimer",
    "Privacy Policy",
    "Intellectual Property",
    "Help Center",
    "Return Policy",
    "Shipping Policy",
  ];

  return (
    <div className="shopnow2-content">
      {activeSection === "collectibles" && (
        <div className="collectibles-section" ref={collectiblesRef} {...collectiblesSwipeHandlers}>
          <h2>Collectibles</h2>
          <Slider {...slickSettings} className="collectibles-slider" ref={collectiblesSliderRef}>
            {collectiblesItems.map((item) => (
              <MemoizedCollectibleItem key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      )}
      {activeSection === "top-shelf" && (
        <>
          <div className="new-release-section" ref={newReleaseRef}>
            <div className="new-release-content">
              <h2>New Release</h2>
              <p className="new-release-note">
                Hot Off the Arc! Power up your collection with the newest anime gear
              </p>
              <img
                src={viku104}
                alt="Dragon"
                className={`dragon-gif ${isNewReleaseVisible ? (dragonDirection === "right" ? "move-right" : "move-left") : ""}`}
                ref={dragonRef}
              />
            </div>
            <div className="cube-container" {...newReleaseSwipeHandlers}>
              <div className="cube" ref={cubeRef} style={{ transform: `rotateY(${currentFace * -60}deg)` }}>
                {newReleaseItems.map((item, index) => (
                  <MemoizedNewReleaseItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="anime-hoodies-section" ref={animeHoodiesRef} {...animeHoodiesSwipeHandlers}>
            <h2>Anime Hoodies</h2>
            <Slider {...slickSettings} ref={animeHoodiesSliderRef} className="anime-hoodies-slider">
              {animeHoodiesItems.map((item) => (
                <MemoizedAnimeHoodieItem key={item.id} item={item} />
              ))}
            </Slider>
          </div>
          <div className="community-feeds-section">
            <h2>Community Feeds</h2>
            <p className="community-feeds-note community-feeds-note-garamond">
              Hot off the Arc Parties, join our fun community in our activities
            </p>
            <div className="community-feeds-container">
              <div className="community-post">
                <img src={viku85} alt="Profile" className="profile-pic-placeholder" />
                <div className="post-content">
                  <div className="post-header">
                    <span className="post-username">AnimeFan123</span>
                    <span className="post-handle">@AnimeFan123</span>
                    <span className="post-timestamp">· 2h</span>
                  </div>
                  <div className="post-body post-body-merriweather">
                    Just got my tickets for Naija Anime Fest! Can't wait to cosplay as my favorite character! 🎉 #AnimeFest2025
                  </div>
                  <div className="post-image">
                    <img src={viku108} alt="Post Image" loading="lazy" />
                  </div>
                  <div className="post-actions">
                    <span className="action-item">
                      <FaHeart className="action-icon" />
                      <span className="action-count">120</span>
                    </span>
                    <span className="action-item">
                      <FaComment className="action-icon" />
                      <span className="action-count">45</span>
                    </span>
                    <span className="action-item">
                      <FaEye className="action-icon" />
                      <span className="action-count">30</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="events-section" {...eventsSwipeHandlers}>
            <h2>Events</h2>
            <p className="events-note">
              Hot off the Arc Parties, join our fun community in our activities
            </p>
            <Slider {...eventsSettings} ref={eventsSliderRef} className="events-slider">
              {(window.innerWidth <= 768 ? mobileEventsItems : eventsItems).map((item) => (
                <MemoizedEventsItem key={item.id} item={item} />
              ))}
            </Slider>
          </div>
          <div className="video-section">
            <div className="video-container">
              <div className="video-text-container">
                <span className="video-hashtag">
                  <span className="hashtag-symbol">#</span>vikuverse
                </span>
                <h2 className="video-overlay-text">
                  Where anime shopping meets community vibes <br />-an experience you won’t forget.
                </h2>
                <p className="video-subtext">
                  Discover the ultimate hub for shopping and networking for anime trendsetters, featuring a carefully curated collection of standout merchandise, events and forums delivered with a personal touch.
                </p>
                <button className="video-button-left">Follow on X</button>
                <button className="video-button-right">Follow on IG</button>
              </div>
              <video src={viku117} autoPlay loop muted playsInline className="featured-video" />
              <div className="video-divider"></div>
              <div className="video-images-container">
                <img src={viku46} alt="Viku 46" className="video-image-46" />
                <img src={viku118} alt="Viku 118" className="video-image-118" />
                <img src={viku119} alt="Viku 119" className="video-image-119" />
                <img src={viku120} alt="Viku 120" className="video-image-120" />
              </div>
            </div>
          </div>
          <div className="manga-section" ref={mangaRef}>
            <div className="manga-content">
              <h2>Manga</h2>
              <p className="manga-note">Dive into Epic Stories! Explore our latest manga collection</p>
            </div>
            <div className="cube-container" {...mangaSwipeHandlers}>
              <div className="cube" ref={mangaCubeRef} style={{ transform: `rotateY(${currentMangaFace * -60}deg)` }}>
                {mangaItems.map((item, index) => (
                  <MemoizedMangaItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="curated-section" ref={curatedRef}>
            <div className="curated-header">
              <img
                src={viku45}
                alt="Glass Ball"
                className="glass-ball"
                style={{ left: `${glassBallPosition.left}px` }}
              />
              <div className="header-wrapper featured-title">
                <h2
                  ref={featuredH2Ref}
                  className={curatedTab === "Featured" ? "active" : ""}
                  onClick={() => handleTabChange("Featured")}
                >
                  Featured
                </h2>
              </div>
              <div className="header-wrapper most-wanted-title">
                <h2
                  ref={mostWantedH2Ref}
                  className={curatedTab === "Deals" ? "active" : ""}
                  onClick={() => handleTabChange("Deals")}
                >
                  Deals
                </h2>
              </div>
            </div>
            <div className="product-grid">
              {curatedItems
                .filter((item) => item.category === curatedTab)
                .map((item) => (
                  <MemoizedCuratedItem key={item.id} item={item} />
                ))}
            </div>
          </div>
          <div className="highlight-about-wrapper">
            <div className="highlight-container">
              <div className="highlight-text">
                join our shopping and<br /> networking community.
              </div>
              <div className="email-container">
                <span className="email-text">Add your email here</span>
                <button className="email-button">SEND</button>
              </div>
            </div>
            <div className="about-container">
              <img src={viku14} alt="Viku Logo" className="about-logo" />
              <h2 className="about-title">About us</h2>
              <h2 className="merchandise-title">Find Merchandise by Anime</h2>
              <h2 className="about-us-title">About Us</h2>
              <p
                className="about-text"
                dangerouslySetInnerHTML={{
                  __html:
                    'Step into <span style="font-family: \'Dancing Script\', cursive; color: #eb6535ff;">VIKUVERSE</span> - the home of anime<br/>' +
                    'lovers in Nigeria. Shop exclusive merch, enjoy<br/>' +
                    'hassle-free service, and connect with the culture<br/>' +
                    'that unites us all. At <span style="color: #fbeea4ff;">Vikuverse</span>, we’re more<br/>' +
                    'than a store - we’re a community. Join new<br/>' +
                    'communities, discover exclusive anime events,<br/>' +
                    'shop with ease, and celebrate the worlds you love.',
                }}
              />
              <div className="anime-list">
                {animeListItems.map((item, index) => (
                  <span key={index} className="list-item">
                    {item}
                    {index < animeListItems.length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </div>
              <div className="about-us-list">
                {aboutUsListItems.map((item, index) => (
                  <span key={index} className="list-item">
                    {item}
                    {index < aboutUsListItems.length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </div>
              <div className="footer-links">
                <a href="#" className="footer-link">Privacy</a>
                <a href="#" className="footer-link">Terms of Use</a>
                <a href="#" className="footer-link">Site Map</a>
              </div>
              <p
                className="contact-text"
                dangerouslySetInnerHTML={{
                  __html:
                    'Contact Us<br/><br/>' +
                    '+2347067857032<br/><br/>' +
                    'vikuverseng@gmail.com',
                }}
              />
              <div className="app-buttons-container">
                <button className="app-store-button">
                  <FaApple className="app-icon" />
                  Download on the App Store
                </button>
                <button className="google-play-button">
                  <FaGooglePlay className="app-icon" />
                  Get it on Google Play
                </button>
              </div>
              <p className="copyright-text">© 2025 Copyright Thirteeneeth Cartel Solutions Inc, DBA Vikuverse INC</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopNow2;