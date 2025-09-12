"use server"

import getMyToken from "@/UTil/getMyToken"

export default async function getAllOrders() {
  const token = await getMyToken()
  if (!token) throw new Error("Login first please")

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/`, {
    method: "GET",
    headers: {
      token: token as string,
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch orders")
  }

  const payload = await res.json()
  return payload
}
