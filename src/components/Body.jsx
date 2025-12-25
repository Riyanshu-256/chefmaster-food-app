import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/api/useOnlineStatus";
import { useNavigate } from "react-router-dom";
import React from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.653564&lng=88.4450847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurantsData =
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid_listing_v2")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold mt-10 text-red-500">
        Looks like you're offline!!! Please check your internet connection
      </h1>
    );
  }

  //  Show shimmer while loading API data
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="bg-white min-h-screen">
      {/* ================= FILTER SECTION ================= */}
      <div className="flex justify-center flex-wrap m-[19px] px-[40px] py-[14px] gap-6">
        {/* ================= SEARCH ================= */}
        <div className="flex items-center">
          <input
            className="px-[40px] py-[14px] rounded-l-[15px] border border-black outline-none"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />

          <button
            className="px-[40px] py-[14px] rounded-r-[15px] bg-gray-100 hover:bg-gray-200 transition"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* ================= TOP RATED ================= */}
        <button
          className="px-[40px] py-[14px] rounded-[15px] bg-gray-100 hover:bg-gray-200 transition"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* ================= RESTAURANT LIST ================= */}

      <div className="flex flex-wrap justify-center gap-[25px] px-[40px] py-[30px] bg-[#f1f1f1]">
        {filteredRestaurants.map((restaurant) => {
          const id = restaurant.info.id;
          const CardComponent = restaurant?.info?.promoted
            ? RestaurantCardPromoted
            : RestaurantCard;

          return (
            <div
              key={id}
              onClick={() => navigate(`/restaurants/${id}`)}
              className="cursor-pointer"
            >
              <CardComponent resData={restaurant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
