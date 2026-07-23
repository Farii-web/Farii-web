import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini client
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("GEMINI_API_KEY is not defined. AI Consultant will fall back to smart offline mode.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini AI Client:", error);
}

// ---------------------------------------------------------------------------
// 1. API ROUTES
// ---------------------------------------------------------------------------

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiEnabled: !!ai });
});

// AI Consultant chatbot endpoint
app.post("/api/chat", async (req, res) => {
  const { messages, userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: "userMessage is required" });
  }

  // Fallback offline responses in case Gemini API is not configured or fails
  const getOfflineResponse = (prompt: string) => {
    const text = prompt.toLowerCase();
    if (text.includes("sheesham") || text.includes("shisham") || text.includes("wood") || text.includes("lakri")) {
      return "Al-Haram Furniture uses 100% premium, seasoned Chinioti Sheesham (Tali/Rosewood) which is extremely durable and naturally pest-resistant. We season our wood in kiln chambers for 6-8 weeks to prevent cracks and warping.";
    }
    if (text.includes("polish") || text.includes("color") || text.includes("rang")) {
      return "We offer premium Polish finishes including Walnut High-Gloss, Walnut Matt, Antique Golden highlights, and modern Deco paint. Our polish is moisture-resistant and preserves the wood's natural grain beautifully.";
    }
    if (text.includes("whatsapp") || text.includes("contact") || text.includes("rabta") || text.includes("phone")) {
      return "You can contact Al-Haram Furniture Chiniot directly at our WhatsApp support (+92 300 1234567) or visit our showroom on Sargodha-Lahore Road, Chiniot. We deliver custom crafted furniture all over Pakistan!";
    }
    if (text.includes("bed") || text.includes("sofa") || text.includes("dining") || text.includes("price")) {
      return "Al-Haram Furniture crafts beds, sofas, and dining sets with intricate Mughal-style hand carvings. Our prices depend on carving complexity (light vs deep 3D carving) and wood selection. Try using our custom 'Interactive Quote Builder' tool on the website for an instant estimate!";
    }
    return "Assalam-o-Alaikum! Welcome to Al-Haram Furniture Chiniot. We are renowned for masterfully hand-carved, pure Sheesham wood royal furniture. How can I assist you with your design selection, wood selection, or order customizations today?";
  };

  if (!ai) {
    // Return offline response
    return res.json({ text: getOfflineResponse(userMessage) });
  }

  try {
    // Format chat history for @google/genai
    // Translate message history to the expected structure
    const chatContents = messages.map((m: any) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    // Add current user message
    chatContents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const systemInstruction = `
      You are the official AI Design Consultant for "Al-Haram Furniture Chiniot", a highly prestigious and world-renowned furniture showroom located in Chiniot, Pakistan.
      Chiniot is famous globally for its traditional royal hand-carved solid wood furniture, mainly made of authentic seasoned Sheesham (Indian Rosewood / Tali) wood.

      Your traits:
      1. Warm, polite, hospitable, and highly expert in traditional Pakistani and Mughal furniture designs. Always start with an Islamic greeting like "Assalam-o-Alaikum" or welcoming words if appropriate.
      2. You speak and understand Urdu, English, and Roman Urdu (Urdu written in English script, which Pakistani customers frequently use, e.g., "bhai sheesham ki kia price hai?"). Respond in the same language/script the user uses!
      3. Provide detailed knowledge about:
         - Wood types: Sheesham (premium quality, dark reddish-brown heartwood, extremely strong, natural insect repellent), Walnut (Akhrot), and Teak (Sagan).
         - Carving styles: Mughal carving, Taj (crown) carving, double-sided intricate carving, traditional floral/vine naqashi.
         - Wood seasoning: Al-Haram Furniture seasons wood in specialized kilns to reduce moisture content below 10%, ensuring it never bends, cracks, or shrinks in varying temperatures.
         - Polishing: High gloss, walnut matte, antique gold leafing, natural oil finishes, Deco paint.
         - Customization: Al-Haram builds completely custom items. Advise users on choosing carving depth (light vs deep 3D) to fit their room size and budget.
      4. Invite them to use the interactive "Quote Builder" on the page or contact the showroom directly on WhatsApp for direct booking.
      5. Keep answers highly professional, conversational, and helpful. Avoid using overly dry technical jargon, but show deep pride in Chiniot's traditional manual craftsmanship.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatContents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I am having trouble connecting right now. Please feel free to ask again or reach out to our team via WhatsApp.";
    res.json({ text: replyText });
  } catch (error) {
    console.error("Gemini API Error in /api/chat:", error);
    res.json({ text: getOfflineResponse(userMessage) });
  }
});

// ---------------------------------------------------------------------------
// 2. VITE MIDDLEWARE & STATIC FILE SERVING
// ---------------------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Al-Haram Furniture Server running on port ${PORT}`);
  });
}

startServer();
