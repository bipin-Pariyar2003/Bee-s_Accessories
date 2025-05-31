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
        <h1 className="text-xl font-semibold pb-5">Get Your Accessories</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae
          aliquam cumque culpa soluta suscipit minima est dolorum sapiente pariatur
          accusamus impedit eos assumenda harum quas animi, dignissimos nobis dolores!
        </p>
      </div>
      <div>
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
