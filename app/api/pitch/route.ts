// pages/api/generatePitch.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

// Instantiate the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method !== "POST") {
        NextResponse.json({ error: "Method not allowed" });
    }

    // const { body: { brand } } = req;

    // if (!brand || !brand["URL"]) {
    //     NextResponse.json({ error: "Brand URL is required" });
    // }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `Write a pitch to provide an ad as a UGC creator with a blank link for me to enter my portfolio link for exchange of a free product or money.`
            }],
            temperature: 0.6,
            max_tokens: 100
        });

        if (completion.choices.length > 0) {
            return NextResponse.json({ pitch: completion.choices[0].message.content });
        } else {
            return NextResponse.json({ error: "No response from AI." });
        }
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return NextResponse.json({ error: "Error fetching response from AI." });
    }
}

