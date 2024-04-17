// pages/api/generatePitch.ts
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

// Instantiate the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const { brand } = req.body;

    if (!brand || !brand["URL"]) {
        res.status(400).json({ error: "Brand URL is required" });
        return;
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `Write a pitch as a UGC creator to ${brand["URL"]} on how you would like to collaborate.`
            }],
            temperature: 0.6,
            max_tokens: 100
        });

        if (completion.choices.length > 0) {
            res.status(200).json({ pitch: completion.choices[0].message.content });
        } else {
            res.status(500).json({ error: "No response from AI." });
        }
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        res.status(500).json({ error: "Error fetching response from AI." });
    }
}

