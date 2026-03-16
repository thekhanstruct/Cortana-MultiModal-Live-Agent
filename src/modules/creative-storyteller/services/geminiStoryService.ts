import { GoogleGenAI } from '@google/genai';

export const getStoryAI = () => new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
