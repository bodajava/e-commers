import React from "react";
import CatogorySwiper from "./_Components/MainSlayder/CatogorySwiper";
import Products from "./products/page";

export default async function Home() {
  return (
<>
    <div className="min-h-screen px-6 py-14 bg-gray-50 flex flex-col items-center">
      
      {/* العنوان */}
      <h1 className="relative text-4xl font-extrabold mb-8 group">
        <span className="inline-block relative z-10">Categories</span>

        {/* الخط الأزرق الأساسي */}
        <span className="absolute left-1/2 -bottom-3 w-60 h-1 bg-blue-600 -translate-x-1/2 rounded-full shadow-sm"></span>

        {/* الخط الأبيض المتحرك عند الهوفر */}
        <span className="absolute left-1/2 -bottom-3 w-0 h-1 bg-white/40 -translate-x-1/2 rounded-full group-hover:animate-sweep"></span>
      </h1>

      {/* السلايدر */}
      <div className="w-full max-w-7xl">
        <CatogorySwiper />
      </div>
      <Products />
    </div>

    
</>
  );
}
