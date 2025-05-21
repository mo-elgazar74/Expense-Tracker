// pages/api/income/index.ts
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/income`, {
      headers: {
        "Content-Type": "application/json",
        // If your backend requires a token, you can add it here manually:
        // Authorization: `Bearer YOUR_HARDCODED_TOKEN`,
      },
    });

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch income", error: error.message });
  }
}
