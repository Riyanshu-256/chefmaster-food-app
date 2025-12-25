import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menuInfo, showAddButton = true }) => {
  if (!menuInfo) return null;

  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { name, price, description, imageId, ratings = {} } = menuInfo;

  const dispatch = useDispatch();

  return (
    <li
      role="button"
      tabIndex={0}
      className="
    my-7
    flex justify-between
    gap-8
    py-5 px-7
    bg-white

    rounded-3xl

    shadow-[0_6px_14px_-6px_rgba(0,0,0,0.18)]
    hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.28)]

    cursor-pointer
    transition-shadow duration-300 ease-in-out

    font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]
  "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <h4 className="text-lg font-bold text-[#242323]">{name}</h4>

        {price && (
          <p className="mt-1 font-medium">₹{(price / 100).toFixed(2)}/_ only</p>
        )}

        {ratings?.aggregatedRating?.rating && (
          <p className="mt-1">
            {ratings.aggregatedRating.rating} ⭐ (
            {ratings.aggregatedRating.ratingCountV2})
          </p>
        )}

        {description && (
          <p className="mt-2 pr-10 text-[#242323] text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT IMAGE */}
      {imageId && (
        <div className="relative">
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="
              w-[140px] h-[120px]
              object-cover
              rounded-[15px]
              shadow-[0_8px_12px_rgba(0,0,0,0.2)]
            "
          />

          {showAddButton && (
            <button
              onClick={() => dispatch(addItem(menuInfo))}
              className="
                absolute -bottom-3 left-1/2 -translate-x-1/2
                bg-white
                text-green-600
                font-bold
                px-6 py-1
                rounded-lg
                shadow-md
                hover:shadow-lg
                active:scale-95
                transition
              "
            >
              ADD +
            </button>
          )}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
