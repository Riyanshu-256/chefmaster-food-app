const RestaurantInfoCard = ({ resInfo }) => {
  if (!resInfo) return null;

  const { name, cuisines, avgRating, costForTwoMessage, areaName, sla } =
    resInfo;

  return (
    <div className="flex justify-center mt-6 px-4">
      {/* OUTER CARD */}
      <div className="w-full max-w-[700px] bg-gray-200 rounded-2xl p-2">
        {/* INNER CARD */}
        <div className="bg-white rounded-2xl p-6">
          {/* CUISINES */}
          <p className="text-orange-600 text-sm font-medium">
            {cuisines?.join(", ")}
          </p>

          {/* RATING */}
          <p className="mt-3 text-sm font-medium text-gray-800">
            ⭐ {avgRating}
          </p>

          {/* COST */}
          <p className="text-sm text-gray-700">{costForTwoMessage}</p>

          {/* TIME + LOCATION */}
          <p className="text-sm text-gray-600">
            {sla?.deliveryTime}–{sla?.deliveryTime + 5} mins • {areaName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
