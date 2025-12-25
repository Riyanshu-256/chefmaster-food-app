import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  const [openIndex, setOpenIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    sla = {},
    areaName,
  } = resInfo?.card?.card?.info || {};

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[900px] mx-auto px-4 py-6 pb-24">
        {/* Restaurant Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-1">{cuisines.join(", ")}</p>

          <div className="flex flex-col items-center gap-2 mt-3 text-sm">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-700">{costForTwoMessage}</span>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins • {areaName}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {resMenu?.map((category, index) => (
            <ItemCategory
              key={index}
              data={category}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
