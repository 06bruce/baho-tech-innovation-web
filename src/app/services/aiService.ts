import { apiRequest } from "./apiClient";

export type PageContext = {
  route: string;
  title: string;
  sections: string[];
  buttons: string[];
  forms: string[];
  inputs?: string[];
  searchableText?: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AiCommandAction =
  | { type: "navigate"; route: string }
  | { type: "focus"; target: string }
  | { type: "click"; target: string }
  | { type: "type"; target: string; text: string }
  | { type: "key"; key: string }
  | { type: "scroll"; direction: "up" | "down" | "top" | "bottom" }
  | { type: "logout" }
  | { type: "language"; language: string }
  | { type: "search"; query: string }
  | { type: "readPage" }
  | { type: "none" };

export const aiService = {
  navigationHelp(token: string, payload: { message: string; language: string; pageContext: PageContext }) {
    return apiRequest<{ ok: boolean; response: string }>("/ai-assistant/navigation-help", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
  screenReader(token: string, payload: { language: string; pageContext: PageContext }) {
    return apiRequest<{ ok: boolean; response: string }>("/ai-assistant/screen-reader", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
  conversation(token: string, payload: { messages: ChatMessage[]; language: string; pageContext: PageContext }) {
    return apiRequest<{ ok: boolean; response: string }>("/ai-assistant/conversation", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
  command(token: string, payload: { command: string; language: string; pageContext: PageContext }) {
    return apiRequest<{ ok: boolean; response: string; actions: AiCommandAction[] }>("/ai-assistant/command", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
