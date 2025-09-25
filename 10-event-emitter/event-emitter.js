const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to the EventEmitter demo.`);
});

myEmitter.emit("greet", "Sajghaa");
myEmitter.emit("greet", "Ceeh");
