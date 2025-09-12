"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import Link from "next/link";
import getAllBrand from "@/api/getAllBrand/getAllBrand";
import { Brand as BrandType } from "@/type/product.type";

export default function Brand() {
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [loading, setLoading] = useState(false);

  async function getBrandss() {
    setLoading(true);
    const res = await getAllBrand();
    setBrands(res?.data || []);
    setLoading(false);
  }

  useEffect(() => {
    getBrandss();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 shadow-2xl rounded-2xl relative overflow-hidden">
      {/* Title with reload */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow">
          ✨ All Brands
        </h1>
        <button
          onClick={getBrandss}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          <motion.div
            animate={loading ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: loading ? Infinity : 0, duration: 1 }}
          >
            <RotateCcw size={20} />
          </motion.div>
          Reload
        </button>
      </div>

      {/* Brands Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
          {brands.map((brand, i) => (
            <Link href={`/brand/${brand._id}`} key={brand._id}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border rounded-2xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center"
              >
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-24 h-24 object-contain mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="font-semibold text-gray-700"
                  whileHover={{ scale: 1.1 }}
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
