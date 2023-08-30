const WebSocket = require("ws");

const wss = new WebSocket.Server(
  {
    port: 9876,
  },
  function () {
    console.log(`websocket is ready`);
  }
);

console.log(wss);
