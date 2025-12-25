import React from "react";

const ShimmerCard = () => {
  return (
    <div className="relative w-[280px] h-[360px] rounded-[12px] bg-[#e0e0e0] overflow-hidden">
      {/* shimmer overlay */}
      <div
        className="
          absolute inset-0
          -translate-x-full
          bg-[linear-gradient(90deg,#e0e0e0_25%,#f5f5f5_37%,#e0e0e0_63%)]
          animate-[shimmer_2.4s_infinite]
        "
      />
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[25px] px-[40px] py-[30px] bg-[#f8f8f8]">
      {Array.from({ length: 8 }).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;
