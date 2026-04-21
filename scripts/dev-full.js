import { spawn } from "node:child_process";

const processes = [
  spawn("npm", ["run", "server"], { stdio: "inherit", shell: true }),
  spawn("npm", ["run", "dev:client"], { stdio: "inherit", shell: true }),
];

function shutdown(signal) {
  for (const child of processes) {
    if (!child.killed) child.kill(signal);
  }
}

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    shutdown(signal);
    process.exit(signal === "SIGINT" ? 130 : 143);
  });
}

for (const child of processes) {
  child.on("exit", (code) => {
    if (code && code !== 0) {
      shutdown("SIGTERM");
      process.exit(code);
    }
  });
}
