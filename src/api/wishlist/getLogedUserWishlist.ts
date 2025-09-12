// src/api/wishlist/getWishlist.ts
import getMyToken from "@/UTil/getMyToken";

export default async function getWishlist() {
  const token = await getMyToken();
  if (!token) throw new Error("Login first please")

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });

  if (!res.ok) {
    throw new Error("❌ Failed to fetch wishlist");
  }

  return await res.json(); // بيرجع { status: "success", data: [...] }
}
