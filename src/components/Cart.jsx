import { useSelector, useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-8">🛒 Your Cart</h1>

      {/* Cart Box */}
      <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Clear Cart Button */}
        {cartItems.length > 0 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-10 py-3 text-lg font-bold rounded-full
              bg-red-500 text-white
              hover:bg-red-600 active:scale-95
              transition-all duration-200 shadow-md"
            >
              Clear Cart
            </button>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500 mb-3">Your cart is empty </p>
            <p className="text-gray-400">
              Discover delicious items and add them to your cart!
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <MenuItem
                key={item?.id || `cart-item-${index}`}
                menuInfo={item}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
