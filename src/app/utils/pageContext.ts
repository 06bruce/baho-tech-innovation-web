import type { PageContext } from "../services/aiService";

export function collectPageContext(route: string): PageContext {
  const main = document.getElementById("main-content") || document.body;
  const textFrom = (selector: string) =>
    Array.from(main.querySelectorAll<HTMLElement>(selector))
      .map((element) => element.innerText || element.getAttribute("aria-label") || "")
      .map((text) => text.trim())
      .filter(Boolean)
      .slice(0, 12);

  return {
    route,
    title: document.title || textFrom("h1, h2")[0] || "Baho Tech",
    sections: textFrom("h1, h2, h3"),
    buttons: textFrom("button, a"),
    forms: Array.from(main.querySelectorAll("form, fieldset"))
      .map((element) => element.getAttribute("aria-label") || element.querySelector("legend")?.textContent || "Form")
      .slice(0, 8),
  };
}

export function fileToBase64(fileOrBlob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(fileOrBlob);
  });
}
