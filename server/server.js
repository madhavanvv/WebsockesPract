const WebSocket = require("ws");
const express = require("express");
const app = express();
const path = require("path");
app.use("/", express.static(path.resolve(__dirname, "../client")));
const server = app.listen(9876);

const wss = new WebSocket.Server({
  server,
});
//maintain clients array

wss.on("connection", function (ws) {
  // ws.send("hello websocket from server==>client");
  ws.on("message", function (data) {
    // ws.send(data);
    //listen @ 44 min
    console.log("hello");

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
        console.log("hello world");
      }
    });
  });
});

//till 51 min
