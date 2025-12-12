import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to give the bot a persona
const SYSTEM_INSTRUCTION = `
You are the AI Studio Assistant for Isac Strand, a film composer and sound designer.
Your tone is professional, creative, and knowledgeable about film music, orchestration, and audio production.
You know the following facts:
- Isac Strand creates original scores for film, TV, and video games.
- He specializes in blending orchestral elements with modern sound design.
- Latest work includes the score for "The Silent Ocean" and "Noir Nights".
- He works out of his studio in Scandinavia.

Keep responses concise (under 50 words).
If asked about hiring, direct them to the Contact section for commissions.
You can discuss music theory, production gear, or Isac's discography.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Studio link established. How can I assist with your sonic needs?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Please try again later.";
  }
};