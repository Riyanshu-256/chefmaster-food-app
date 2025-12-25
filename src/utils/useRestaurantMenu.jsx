import { useEffect, useState } from "react";
import swiggyAPI from "./swiggyAPI.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    if (!resId) return;

    // 🔹 Restaurant Info
    const restaurantInfo = swiggyAPI?.data?.cards?.find((item) =>
      item?.card?.card?.["@type"]?.includes("food.v2.Restaurant")
    );

    // 🔹 Menu Categories
    const menuCategories =
      swiggyAPI?.data?.cards
        ?.find((card) => card?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) =>
          card?.card?.card?.["@type"]?.includes("ItemCategory")
        )
        ?.map((category) => ({
          categoryId: category?.card?.card?.categoryId,
          title: category?.card?.card?.title,
          itemCards: category?.card?.card?.itemCards || [],
        })) || [];

    setResInfo(restaurantInfo);
    setResMenu(menuCategories);
  }, [resId]);

  return { resInfo, resMenu };
};

export default useRestaurantMenu;
