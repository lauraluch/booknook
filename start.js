const { exec } = require("child_process");

const startFrontend = exec("npm run dev", { cwd: "frontend" });
const startBackend = exec("npm run dev", { cwd: "backend" });

startFrontend.stdout.on("data", (data) => {
  console.log(`[Frontend] ${data}`);
});

startFrontend.stderr.on("data", (data) => {
  console.error(`[Frontend] ${data}`);
});

startBackend.stdout.on("data", (data) => {
  console.log(`[Backend] ${data}`);
});

startBackend.stderr.on("data", (data) => {
  console.error(`[Backend] ${data}`);
});

startFrontend.on("close", (code) => {
  console.log(`Frontend process exited with code ${code}`);
});

startBackend.on("close", (code) => {
  console.log(`Backend process exited with code ${code}`);
});
