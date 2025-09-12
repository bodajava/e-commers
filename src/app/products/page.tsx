
"use client";
import React, { useEffect, useState } from "react";
import getProducts from "@/api/products_api/Products.Api";
import SingleProducts from "../_Components/singleProducts/singleProducts";
import Loading from "./Loading";
import { profuctType } from "@/type/product.type";
export default function Products() {
  const [data, setData] = useState<profuctType[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts().then((res) => {
    setData(res); 
    setLoading(false);
  });
}, []);


  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((currantproduct : profuctType) => (
          <SingleProducts key={currantproduct._id} product={currantproduct} />
        ))}
      </div>
    </div>
  );
}
