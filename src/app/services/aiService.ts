import { apiRequest } from "./apiClient";

export type PageContext = {
  route: string;
  title: string;
  sections: string[];
  buttons: string[];
  forms: string[];
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

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
};
