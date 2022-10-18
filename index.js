const express = require("express");
const app = express();
const path = require("path");

const http = require("http").Server(app);

const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
  //   res.json({ sheshh: "sheioĥzihihrophuvhzhhhzrhrhzhvurhzruioehu" });
});
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("client message " + msg);
  });
});

http.listen(2000, () => {
  console.log("listening on port 2000");
});
