import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReusableCards from "../ReusableCards";
import axios from "axios";

const Cards = () => {
  const [randomItems, setRandomItems] = useState([]);
  const sliderRef = useRef(null);

  const getRandomItems = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/accessories");
        const selectedItems = getRandomItems(res.data, 5);
        setRandomItems(selectedItems);

        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
        }, 500);
      } catch (err) {
        console.error("Failed to load data from backend:", err);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mt-10 container mx-auto px-4 md:px-20">
        <h1 className="text-3xl font-semibold pb-5 text-pink-500 animate-bounce">
          #BeYouWithBees
        </h1>
        <p className="text-thin mb-5">
          Bee’s Accessories is your go-to online store for trendy and stylish accessories
          specially curated for girls. From earrings and rings to phone charms and lockets
          we bring you the latest designs at affordable prices.
        </p>
        <p className="text-pink-500">Style made simple. Delivered to your door. 💛</p>
      </div>
      <div>
        <p className="text-center m-5 flex items-center justify-center gap-2 animate-pulse transition-transform duration-300 hover:translate-x-2">
          <span className="animate-bounce">👉</span> Swipe to see latest accessories
        </p>
        <Slider ref={sliderRef} {...settings}>
          {randomItems.map((item) => (
            <ReusableCards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Cards;
