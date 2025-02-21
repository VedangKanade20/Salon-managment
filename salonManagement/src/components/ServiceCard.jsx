import React from "react";

const ServiceCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Service"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">HairCut!</h2>
        <p>Normal Hair-Cut without wash</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
