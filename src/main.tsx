
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // A redeploy invalidates the hashed chunks the current HTML points at.
  // React Router surfaces that as a rejected navigation rather than a render
  // error, so recover here too — once per session, then let it surface.
  window.addEventListener("unhandledrejection", (event) => {
    const message = String(event.reason?.message ?? event.reason ?? "");
    const stale =
      /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(
        message
      );
    if (stale && !sessionStorage.getItem("baho_chunk_reload")) {
      sessionStorage.setItem("baho_chunk_reload", "1");
      window.location.reload();
    }
  });

  createRoot(document.getElementById("root")!).render(<App />);
  