"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import getWishlist from "@/api/wishlist/getLogedUserWishlist";
import { profuctType } from "@/type/product.type";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<profuctType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await getWishlist();
        setWishlist(res.data); // البيانات في res.data
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">Loading wishlist...</p>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">No products in your wishlist ❤️</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist ❤️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative"
          >
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </button>
            <Link href={`/products/${product._id}`}>
              <img
                src={product.imageCover}
                alt={product.title}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.category?.name}</p>
              <p className="text-xl font-bold text-gray-900 mt-2">
                ${product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
