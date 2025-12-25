import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen flex flex-col justify-center items-center text-center px-4
        bg-linear-to-br from-orange-50 to-white
        dark:from-gray-800 dark:to-gray-900
      "
    >
      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
        Oops! Something broke 😵
      </h1>

      {/* Sub heading */}
      <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        We can’t find the page you’re looking for
      </h2>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {/* Go Home */}
        <button
          onClick={() => navigate("/")}
          className="
            px-6 py-3 rounded-full font-medium
            bg-orange-500 text-white
            hover:bg-orange-600 transition-transform hover:scale-105 
          "
        >
          Go Home 🏠
        </button>

        {/* Reload */}
        <button
          onClick={() => window.location.reload()}
          className="
            px-6 py-3 rounded-full font-medium
            bg-orange-500 text-white
            hover:bg-orange-600 transition-transform hover:scale-105 
          "
        >
          Try Again 🔄
        </button>
      </div>

      {/* Helpful hint */}
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Still stuck? Check your internet connection or try again later.
      </p>
    </div>
  );
};

export default Error;
