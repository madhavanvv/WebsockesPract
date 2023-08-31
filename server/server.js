const WebSocket = require("ws");

const wss = new WebSocket.Server({
  port: 9876,
});
wss.on("connection", function (ws) {
  // ws.send("hello websocket from server==>client");
  ws.on("message", function (data) {
    ws.send(data);
  });
});
