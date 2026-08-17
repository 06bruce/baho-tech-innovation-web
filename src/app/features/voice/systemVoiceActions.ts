import type { NavigateFunction } from "react-router";
import { getDashboardPathForDisability, type DisabilityCategory } from "../../utils/disability";

type SystemVoiceUser = {
  role?: string;
  disabilityCategory?: DisabilityCategory | null;
} | null;

type SystemVoiceActionContext = {
  navigate?: NavigateFunction;
  logout?: () => void | Promise<void>;
  changeLanguage?: (language: string) => void | Promise<void>;
  user?: SystemVoiceUser;
};

const languageAliases: Record<string, string> = {
  english: "en",
  en: "en",
  kinyarwanda: "rw",
  rwanda: "rw",
  rw: "rw",
  french: "fr",
  francais: "fr",
  fr: "fr",
  swahili: "sw",
  kiswahili: "sw",
  sw: "sw",
};

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function elementText(element: HTMLElement) {
  const id = element.getAttribute("id");
  const label = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`)?.textContent : "";
  return normalizeText(
    [
      label,
      element.getAttribute("aria-label"),
      element.getAttribute("placeholder"),
      element.getAttribute("name"),
      element.getAttribute("title"),
      element.textContent,
    ]
      .filter(Boolean)
      .join(" ")
  );
}

function isVisible(element: HTMLElement) {
  if (element.hidden || element.getAttribute("aria-hidden") === "true") return false;
  const styles = window.getComputedStyle(element);
  return styles.display !== "none" && styles.visibility !== "hidden";
}

function getFocusableElements() {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      "a[href], button, input, textarea, select, summary, [tabindex]:not([tabindex='-1'])"
    )
  ).filter((element) => isVisible(element) && !element.hasAttribute("disabled") && element.getAttribute("aria-disabled") !== "true");
}

function findElement(target: string) {
  const normalizedTarget = normalizeText(target);
  if (!normalizedTarget) return null;
  return getFocusableElements().find((element) => elementText(element).includes(normalizedTarget)) || null;
}

function focusElement(element: HTMLElement) {
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.focus({ preventScroll: true });
}

function moveFocus(direction: 1 | -1) {
  const elements = getFocusableElements();
  if (!elements.length) return false;
  const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const currentIndex = active ? elements.indexOf(active) : -1;
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + direction + elements.length) % elements.length;
  focusElement(elements[nextIndex]);
  return true;
}

function setNativeValue(element: HTMLInputElement | HTMLTextAreaElement, value: string) {
  const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), "value");
  descriptor?.set?.call(element, value);
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function clickElement(element: HTMLElement) {
  focusElement(element);
  element.click();
  return true;
}

function dispatchKey(key: string) {
  const target = document.activeElement || document.body;
  const eventOptions = { key, bubbles: true, cancelable: true };
  target.dispatchEvent(new KeyboardEvent("keydown", eventOptions));
  target.dispatchEvent(new KeyboardEvent("keyup", eventOptions));

  if (target instanceof HTMLElement && (key === "Enter" || key === " ")) {
    const clickable = target.closest<HTMLElement>("button, a[href], summary, [role='button']");
    clickable?.click();
  }

  return true;
}

function routeForTarget(target: string, user?: SystemVoiceUser) {
  const normalizedTarget = normalizeText(target);
  const dashboardPath = user?.role === "admin" ? "/admin/dashboard" : getDashboardPathForDisability(user?.disabilityCategory);
  const routes: Array<[string[], string]> = [
    [["home", "main page"], "/"],
    [["about"], "/about"],
    [["services", "service"], "/services"],
    [["contact"], "/contact"],
    [["login", "sign in"], "/login"],
    [["register", "signup", "sign up"], "/register"],
    [["dashboard", "workspace"], dashboardPath],
    [["admin", "admin dashboard"], "/admin/dashboard"],
    [["users", "user management", "profile"], user?.role === "admin" ? "/admin/users" : dashboardPath],
    [["settings"], "/admin/settings"],
    [["blind", "blind tools"], "/dashboard/blind"],
    [["deaf", "deaf tools"], "/dashboard/deaf"],
    [["mute", "mute tools"], "/dashboard/mute"],
    [["mobility", "mobility tools"], "/dashboard/mobility"],
  ];

  return routes.find(([aliases]) => aliases.some((alias) => normalizedTarget.includes(alias)))?.[1] || null;
}

function textAfter(command: string, prefixes: string[]) {
  const normalizedCommand = normalizeText(command);
  const prefix = prefixes.find((item) => normalizedCommand.startsWith(item));
  return prefix ? normalizedCommand.slice(prefix.length).trim() : "";
}

export async function executeSystemVoiceAction(command: string, context: SystemVoiceActionContext = {}) {
  const text = normalizeText(command);
  if (!text) return false;

  if (/\b(log out|logout|sign out)\b/.test(text)) {
    await context.logout?.();
    return true;
  }

  const languageTarget = textAfter(text, ["change language to", "switch language to", "set language to"]);
  if (languageTarget) {
    const language = languageAliases[languageTarget];
    if (language && context.changeLanguage) {
      await context.changeLanguage(language);
      return true;
    }
  }

  if (/\b(read page|read screen|screen reader|activate reader)\b/.test(text)) {
    window.dispatchEvent(new CustomEvent("baho-ai-activate"));
    return true;
  }

  if (/\b(go back|previous page)\b/.test(text)) {
    window.history.back();
    return true;
  }

  if (/\b(go forward|next page)\b/.test(text)) {
    window.history.forward();
    return true;
  }

  if (/\b(scroll down|move down|page down)\b/.test(text)) {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.75), behavior: "smooth" });
    return true;
  }

  if (/\b(scroll up|move up|page up)\b/.test(text)) {
    window.scrollBy({ top: -Math.round(window.innerHeight * 0.75), behavior: "smooth" });
    return true;
  }

  if (/\b(scroll top|go to top|move top)\b/.test(text)) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }

  if (/\b(scroll bottom|go to bottom|move bottom)\b/.test(text)) {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    return true;
  }

  if (/\b(next field|next item|tab|move next)\b/.test(text)) return moveFocus(1);
  if (/\b(previous field|previous item|shift tab|move previous)\b/.test(text)) return moveFocus(-1);

  const keyAliases: Record<string, string> = {
    enter: "Enter",
    return: "Enter",
    space: " ",
    escape: "Escape",
    esc: "Escape",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    "arrow up": "ArrowUp",
    "arrow down": "ArrowDown",
    "arrow left": "ArrowLeft",
    "arrow right": "ArrowRight",
    home: "Home",
    end: "End",
    "page up": "PageUp",
    "page down": "PageDown",
    backspace: "Backspace",
    delete: "Delete",
  };
  const keyTarget = textAfter(text, ["press ", "hit "]);
  if (keyTarget && keyAliases[keyTarget]) return dispatchKey(keyAliases[keyTarget]);

  const routeTarget = textAfter(text, ["navigate to", "go to", "open"]);
  const route = routeTarget ? routeForTarget(routeTarget, context.user) : routeForTarget(text, context.user);
  if (route && context.navigate) {
    context.navigate(route);
    return true;
  }

  const clickTarget = textAfter(text, ["click", "press", "select", "open"]);
  if (clickTarget) {
    const element = findElement(clickTarget);
    if (element) return clickElement(element);
  }

  const focusTarget = textAfter(text, ["focus", "move to", "go to field", "select field"]);
  if (focusTarget) {
    const element = findElement(focusTarget);
    if (element) {
      focusElement(element);
      return true;
    }
  }

  const typeMatch = text.match(/^(type|write|enter|fill)\s+(.+?)\s+(in|into|on)\s+(.+)$/);
  if (typeMatch) {
    const element = findElement(typeMatch[4]);
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      focusElement(element);
      setNativeValue(element, typeMatch[2]);
      return true;
    }
  }

  const clearTarget = textAfter(text, ["clear"]);
  if (clearTarget) {
    const element = findElement(clearTarget);
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      focusElement(element);
      setNativeValue(element, "");
      return true;
    }
  }

  return false;
}
