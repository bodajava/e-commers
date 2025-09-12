// src/api/wishlist/wishlist.api.ts
import getMyToken from "@/UTil/getMyToken";

export default async function addWishlist(productId: string) {
  const token = await getMyToken();
  if (!token) throw new Error("Login first please")

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ productId }),
  });

  if (!res.ok) throw new Error("❌ Failed to add to wishlist");

  return await res.json();
}
