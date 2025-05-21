// pages/api/expenses/index.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendURL = "http://localhost:3000/expenses"; // Change if different

  try {
    const response = await fetch(backendURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add authorization header if your backend requires it:
        // "Authorization": `Bearer ${yourToken}`,
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching expenses", error: error.message });
  }
}
