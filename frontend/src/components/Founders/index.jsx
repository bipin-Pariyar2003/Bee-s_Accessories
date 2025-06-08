import React from "react";
import bipikaImg from "../assets/founders/bipika.jpg";
import bipinImg from "../assets/founders/bipin.jpg";
const Founder = () => {
  return (
    <>
      <hr className="border-1 border-pink-500" />
      <div className="mt-8 ">
        <h1 className="text-xl md:text-2xl text-center text-pink-500 ">
          💌 From the hearts behind Bee’s Accessories.
        </h1>
        <p className="text-md md:text-xl text-center mt-4 leading-loose ">
          As founders, <span className="text-pink-500">Bipin Pariyar</span> and{" "}
          <span className="text-pink-500">Bipika Chaudhary</span> turned their love for
          creativity and self-expression into a space that celebrates style,
          individuality, and confidence. In this section, we share a few words straight
          from the hearts behind Bee’s — a little glimpse into our journey, our purpose,
          and our promise to you.
        </p>

        <div className="flex flex-col md:flex-row mt-10  items-start justify-evenly space-y-12 md:space-y-0  space-x-0 md:space-x-16">
          {/* bipika  */}
          <div className="flex-1 items-center justify-center w-full bg-pink-100 rounded-lg p-6 ">
            <div className="flex flex-col justify-center items-center space-y-4 ">
              <div>
                <img
                  src={bipikaImg}
                  className="rounded-full h-40 w-40 md:h-80 md:w-80 object-cover border"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs md:text-base leading-loose ">
                  Founder <span className="text-pink-500 ">~Ms. Bipika Chaudhary</span>{" "}
                </p>
              </div>
              <div>
                <p className="text-justify text-sm md:text-lg leading-loose ">
                  "Hey lovely! I’m Bipika, co-founder of Bee’s Accessories, and your go-to
                  girl when it comes to picking the cutest, trendiest pieces! I’ve always
                  loved accessorizing, it's such a fun way to express who you are. So,
                  when Bipin and I decided to turn our idea into something real, I was
                  beyond excited to curate accessories that are stylish, affordable, and
                  full of personality. Every product you see is chosen with love, with you
                  in mind. I hope it brings you the same joy it brings me while selecting
                  and styling them. Thank you for supporting our dream, it means
                  everything!"
                  <br />
                  <span className="text-pink-500">Bipika Chaudhary</span>
                  <br />
                  <span className="text-pink-500">Co-founder, Bee’s Accessories</span>
                  <br />
                  <span className="text-pink-500 underline">
                    <a href="mailto:bipikachaudhary42@gmail.com">
                      bipikachaudhary42@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* bipin  */}
          <div className="flex-1 items-center justify-center w-full bg-sky-100 rounded-lg p-6 ">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div>
                <img
                  src={bipinImg}
                  className="rounded-full h-40 w-40 md:h-80 md:w-80 object-cover border"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs md:text-base leading-loose ">
                  Co-Founder <span className="text-pink-500">~Mr. Bipin Pariyar</span>
                </p>
              </div>
              <div>
                <p className=" text-justify  text-sm md:text-lg leading-loose">
                  "Hi there! I’m Bipin, one of the co-founders of Bee’s Accessories. As
                  someone who’s always been inspired by creativity and style, starting
                  Bee’s with my best friend felt like the perfect way to blend passion and
                  purpose. I may not be the one picking out the cutest earrings (that’s
                  totally Bipika’s domain!), but I’ve loved every step of building this
                  space, from designing the brand to making sure your experience feels
                  smooth, simple, and stylish. For me, Bee’s is more than just an
                  accessory store, it’s a way to help people feel confident and seen. And
                  I’m so proud of what we’re building together. Thank you for being part
                  of our journey. We’re just getting started!"
                  <br />
                  <span className="text-pink-500">Bipin Pariyar</span> <br />
                  <span className="text-pink-500">
                    Co-founder, Bee’s Accessories
                  </span>{" "}
                  <br />
                  <span className="text-pink-500 underline">
                    <a href="mailto:bipin.pariyar2002@gmail.com">
                      bipin.pariyar2002@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
