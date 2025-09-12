"use server"
import getMyToken from "@/UTil/getMyToken";

export default async function getAllBrand() {
    const token = await getMyToken()
    if (!token) throw new Error("Login first please")

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
        method: "GET",
        headers: {
            token: token as string,
            "Content-Type": "application/json",
        }
    })

    const payload = await res.json()
    return payload

}