// RestaurantCard.jsx
// Reusable component to display a single restaurant card

import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info;

  return (
    // OLD: rest-card
    <div
      data-testid="resCard"
      className="
        w-[280px]
        bg-[#ffffff]
        hover:bg-[#e3e3e3]
        rounded-[12px]
        overflow-hidden
        shadow-md
        text-center
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:scale-[1.02]
      "
    >
      {/* OLD: card1-img */}
      <img
        className="w-full h-[180px] object-cover"
        alt="restaurant"
        src={CDN_URL + info?.cloudinaryImageId}
      />

      {/* OLD: card body */}
      <div className="p-4">
        <h2 className="text-[17px] font-semibold text-gray-800 mb-1">
          {info?.name}
        </h2>

        <h4 className="text-[14px] text-gray-600 mb-1">
          {info?.cuisines?.join(", ")}
        </h4>

        {/* OLD: rating */}
        <span className="inline-block text-[13px] text-gray-800 px-2 py-1 rounded-md mb-1 bg-orange-100">
          {info?.avgRating ?? info?.avgRatingString} ⭐
        </span>

        <h4 className="text-[14px] text-gray-600">{info?.costForTwo}</h4>

        <h4 className="text-[14px] text-gray-600">
          {info?.sla?.deliveryTime} minutes
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

/* ========================================================= */
/* HIGHER ORDER COMPONENT – Promoted Label */
/* OLD: promote */

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          className="
            absolute
            top-2
            left-2
            bg-black
            text-white
            text-xs
            font-semibold
            px-2
            py-1
            rounded
            z-10
          "
        >
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
