import React from "react";

const ReusableCards = ({ item }) => {
  return (
    <>
      <div className="max-w-screen-2xl my-10 container mx-auto px-4 md:px-20">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105  shadow-2xl transition-all duration-300">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "350px", objectFit: "cover" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-thin">
              {item.name}{" "}
              <div className="badge badge-secondary font-thin text-xs  ">
                {item.category}
              </div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there are title
              and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="badge badge-outline p-5">Rs. {item.price}/-</button>
              <button className="badge badge-primary p-5">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableCards;
