const URL = "ws://127.0.0.1:9876/websocket";
const ws = new WebSocket(URL);

ws.onopen = function () {
  ws.send("hello venu from client");
};

// setTimeout(() => {
//   ws.send("hello websocket from client==>server");
//   ws.send("hello websocket ");
//   ws.send("helloweb");
//   ws.onmessage = function (event) {
//     console.log(event.data);
//   };
//   ws.send("LAST");
// }, 5000);
// this is CLIENT
