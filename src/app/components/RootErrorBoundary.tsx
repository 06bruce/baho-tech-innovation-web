import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * A redeploy replaces every hashed chunk. A tab that was opened before the
 * deploy still holds the old HTML, so its lazy `import()` calls point at files
 * that no longer exist and reject with "Failed to fetch dynamically imported
 * module". The page is not broken — it is simply stale — so the correct
 * recovery is a single reload onto the new HTML.
 *
 * We reload at most once (guarded by sessionStorage) so a genuine, repeatable
 * failure surfaces as a real message instead of an infinite reload loop.
 */
const RELOAD_FLAG = "baho_chunk_reload";

function isStaleChunkError(error: Error) {
  const message = `${error?.name ?? ""} ${error?.message ?? ""}`;
  return (
    /Failed to fetch dynamically imported module/i.test(message) ||
    /error loading dynamically imported module/i.test(message) ||
    /Importing a module script failed/i.test(message) ||
    /ChunkLoadError/i.test(message)
  );
}

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class RootErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (isStaleChunkError(error) && !sessionStorage.getItem(RELOAD_FLAG)) {
      sessionStorage.setItem(RELOAD_FLAG, "1");
      window.location.reload();
      return;
    }
    // Keep diagnostics in the console; never render internals to the visitor.
    console.error("Unhandled application error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        role="alert"
        className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center"
      >
        <h1 className="text-2xl text-gray-900">Something went wrong</h1>
        <p className="max-w-md text-gray-600">
          We could not finish loading this page. Reloading usually fixes it.
        </p>
        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem(RELOAD_FLAG);
            window.location.reload();
          }}
          className="rounded-full bg-[#1A4F8D] px-6 py-3 text-white transition-colors hover:bg-[#1C5B78] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1A4F8D]/30"
        >
          Reload page
        </button>
      </div>
    );
  }
}
