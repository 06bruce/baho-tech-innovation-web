import { apiRequest } from "./apiClient";

export type ContentType = "team" | "project" | "news";

export type ContentItem = {
  id: string;
  type: ContentType;
  slug: string;
  title: string;
  name: string;
  role: string;
  bio: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link: string;
  location: string;
  isPublished: boolean;
  sortOrder: number;
  story: string[];
  metadata: Record<string, unknown>;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ContentPayload = Partial<ContentItem> & {
  type: ContentType;
};

export const contentService = {
  listPublic(type: ContentType) {
    return apiRequest<{ ok: boolean; items: ContentItem[] }>(`/content/${type}`, {
      method: "GET",
    });
  },

  listAdmin(token: string) {
    return apiRequest<{ ok: boolean; items: ContentItem[] }>("/content/", {
      method: "GET",
      authToken: token,
    });
  },

  create(token: string, payload: ContentPayload) {
    return apiRequest<{ ok: boolean; item: ContentItem }>("/content/", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },

  update(token: string, id: string, payload: Partial<ContentPayload>) {
    return apiRequest<{ ok: boolean; item: ContentItem }>(`/content/${id}`, {
      method: "PUT",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },

  remove(token: string, id: string) {
    return apiRequest<{ ok: boolean; message: string }>(`/content/${id}`, {
      method: "DELETE",
      authToken: token,
    });
  },
};
