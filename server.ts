import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK server-side
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

// Multi-turn Concierge Chat API
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    if (!ai) {
      // Graceful informative fallback if API key is not yet configured in environment
      return res.json({
        reply:
          "Welcome to Hotel Tulips Grand! I am your virtual concierge. We offer 38 modern rooms (Standard City View & Twin), an authentic multi-cuisine family restaurant (Hyderabadi Dum Biryani, Mughlai, North Indian, Chinese), and 3 banquet halls (Vaibhavam, Amantran, Utsavam) located in Block A, Merix Pride, Suraram Village, near Malla Reddy Health City. You can contact us directly at +91 87120 16688. How may I assist your stay or reservation today?",
      });
    }

    const formattedContents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

    const systemInstruction = `You are the virtual luxury concierge for Hotel Tulips Grand, situated in Suraram, Hyderabad, Telangana, India (near Malla Reddy Health City).
You speak with warmth, refinement, and professional hospitality.

Property Highlights:
- Location: Block A, Merix Pride, 02-019/64, Suraram Village, 1, Hyderabad, Telangana 500055 (near Malla Reddy Health City, not opposite).
- Phone: +91 87120 16688 | WhatsApp: +91 87120 16688
- Accommodations: 38 rooms total. Categories include Standard Room with City View (~280 sq.ft, King bed, work desk, dining area, open sit-out) and Standard Twin Room (~250 sq.ft, two twin beds, work desk).
- Dining: Multi-cuisine family restaurant serving authentic Hyderabadi Dum Biryani, Mughlai kebabs, North Indian curries, wok-fired Chinese dishes, and seafood. Halal certified kitchen and extensive vegetarian selections.
- Banquets & Events: 3 signature halls — VAIBHAVAM (grand weddings & receptions), AMANTRAN (intimate family milestones & engagements), and UTSAVAM (corporate symposiums & conclaves).
- Booking: Direct redirects to verified booking platforms (Booking.com, MakeMyTrip, Agoda, Google Hotels).

Guidelines:
- Answer guest questions courteously and concisely in 2-4 sentences unless detailed assistance is requested.
- Politely guide guests to use the "Book a Room", "Reserve a Table", or "Plan Your Event" buttons on the page for instant action.
- Never invent fake booking confirmation numbers, fake room prices, or fake room availability.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Thank you for inquiring with Hotel Tulips Grand. How else may I assist you?";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini Concierge Chat error:", error);
    res.status(500).json({
      error: "Unable to process concierge request at this moment.",
      details: error?.message,
    });
  }
});

// Mount Vite or serve static files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
