import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Founders from "../../components/Founders";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen flex flex-col mt-8 p-20 space-y-20">
          <h1 className="text-2xl text-center">
            Let’s take you behind the sparkle — get to know{" "}
            <span className="text-pink-500">~Bee’s Accessories!</span>
          </h1>
          <div className="flex flex-col items-center space-y-4 justify-center">
            <div>
              <p>
                Or let's Shop your favourite{" "}
                <span className="text-pink-500">accessories!!</span>
              </p>
            </div>
            <div>
              <button
                className="btn btn-primary text-white rounded-xl justify-center font-light mt-8 px-5 py-2 hover: shadow-2xl transition-all duration-300"
                onClick={() => navigate("/")}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* who we are  */}
          <div className="flex flex-col space-y-20">
            <div className="flex flex-row mb-6 justify-evenly  items-center">
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/images/logo.png"
                  alt="Bee's Accessories Logo"
                  className="w-80 h-80 border rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl leading-loose p-8  ">
                  <span className="text-pink-500 text-2xl">Who we are?</span> <br />
                  Since 2025 <br /> "Bee’s Accessories is an online-based accessory store
                  that brings you the latest and most stylish pieces — perfect for those
                  who love to express themselves through fashion."
                </p>
              </div>
            </div>

            {/* why we started  */}
            <div className="flex flex-row mb-6 justify-evenly space-x-6 items-center">
              <div className="flex-1">
                <p className="text-xl leading-loose p-4">
                  <span className="text-pink-500 text-2xl">Why we started?</span> <br />
                  "We started Bee’s Accessories with one simple idea:
                  <ul>
                    <li>
                      Make beautiful, fun, and affordable accessories easily accessible to
                      every one who wants to shine in her own way."
                    </li>
                  </ul>{" "}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/aboutImages/why_we_started.png"
                  alt="Bee's Accessories Logo"
                  className="h-80 w-80  border rounded-full object-cover"
                />
              </div>
            </div>

            {/* our collection  */}
            <div className="flex flex-row mb-6 justify-evenly space-x-6 items-center">
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/aboutImages/our_collection.png"
                  alt="Bee's Accessories Logo"
                  className="w-80 h-80 border rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl leading-loose p-4">
                  <span className="text-pink-500 text-2xl">Our Collection</span> <br />
                  Our collection includes: Earrings & Ear Tops – elegant, trendy, or
                  playful styles Rings & Arm Cuffs – complete your outfit with a touch of
                  glam Phone Charms & Lockets – for that extra sparkle At Bee’s
                  Accessories, we believe that looking good shouldn’t cost a fortune.
                </p>
              </div>
            </div>

            {/* our focus  */}
            <div className="flex flex-row mb-6 justify-evenly space-x-6 items-center">
              <div className="flex-1">
                <p className="text-xl leading-loose p-4">
                  <span className="text-pink-500 text-2xl">Our Focus</span> <br />
                  We focus on offering affordable and fashion-forward accessories with a
                  smooth and friendly shopping experience.✨
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/aboutImages/our_focus.png"
                  alt="Bee's Accessories Logo"
                  className="w-80 h-80 border rounded-full object-cover"
                />
              </div>
            </div>

            {/* why choose us  */}
            <div className="flex flex-row mb-6 justify-evenly space-x-6 items-center">
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/aboutImages/why_choose_us.png"
                  alt="Bee's Accessories Logo"
                  className="w-80 h-80 border rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xl leading-loose">
                  <span className="text-pink-500">🌟 Why Choose Us?</span>
                  <ul className="list-disc pl-6">
                    <li>Trendy & high-quality products</li>
                    <li> Affordable pricing </li>
                    <li>
                      Fast, friendly service Online convenience with delivery to your door{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/* thank you message  */}
            <div className="flex flex-row mb-6 justify-evenly space-x-6 items-center">
              <div className="flex-1">
                <p className="text-xl leading-loose p-4">
                  <span className="text-pink-500 text-2xl">
                    Thank You for Your Support
                  </span>{" "}
                  <br />
                  Thank you for supporting Bee’s Accessories — your one-stop shop for all
                  things pretty and stylish. Be bold. Be beautiful.
                  <br />
                  Be you with Bee’s Accessories. 🐝 <br />
                  <span className="text-pink-500">#BeYouWithBees</span>
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="/public/aboutImages/thank_you.png"
                  alt="Bee's Accessories Logo"
                  className="w-80 h-80 border rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* footer  */}
          <div>
            <Founders />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
