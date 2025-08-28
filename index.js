const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello from mesaughack 🚀");
});

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
const express = require("express");
const app = express();
app.use(express.json());

// Home
app.get("/", (_req, res) => res.send("Hello from mesaughack 🚀"));

// Healthcheck for uptime monitors
app.get("/health", (_req, res) => res.json({ ok: true }));

// Simple API
app.get("/api/ping", (_req, res) => res.json({ pong: true, ts: Date.now() }));

// Example POST
app.post("/api/echo", (req, res) => res.json({ youSent: req.body }));

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () =>
  console.log(`Server running at http://${HOST}:${PORT}`),
);
