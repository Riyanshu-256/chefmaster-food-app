import MenuItem from "./MenuItem";

const ItemCategory = ({ data, isOpen, onToggle, addToCart }) => {
  const { title, itemCards = [] } = data;

  return (
    <div className="mb-4 bg-gray-100 rounded-xl shadow-sm">
      {/* Header */}
      <div
        onClick={onToggle}
        className="flex justify-between items-center px-6 py-4 cursor-pointer"
      >
        <h2 className="text-lg font-bold text-black">
          {title} ({itemCards.length})
        </h2>

        {/* Black circular arrow */}
        <div className="w-7 h-7 flex items-center justify-center bg-black rounded-full">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/sf-regular-filled/48/circled-chevron-up.png"
            alt="toggle-arrow"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-6" />

      {/* Body */}
      {isOpen && (
        <div className="px-6 py-3">
          {itemCards.map((item, index) => (
            <MenuItem
              key={item?.card?.info?.id ?? index}
              menuInfo={item?.card?.info}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
