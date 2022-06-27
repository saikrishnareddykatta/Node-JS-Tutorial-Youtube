// we get back from a events module is an class and according to common prctice we name it as EventEmitter
const EventEmitter = require("events");
// If we need to any custom operations, we need to extend the EventEmitter Class
// or if we just want to emit an event and listen for it then we can create an instance
const customEmitter = new EventEmitter();
// customEmitter is an instance of Class EventEmitter
// there are many methods in the object customEmitter, however we are intrested only on two methods
// 1. on - listen for an event
// 2. emit - emit an event
// Here below wea re subscribing to the event
customEmitter.on("response", () => {
  console.log(`data recieved`);
});
// We can have unlimited on methods (listening methods) for one particular event
// here we are having two listeners for one event "response"
customEmitter.on("response", () => {
  console.log("Some other logic is present here");
});
customEmitter.on("response", (name, id) => {
  console.log(`Employee Name: ${name} - ID: ${id}`);
});

// Here we are emiting an event
customEmitter.emit("response");
// once an event is emitted, the on method listens to it and executes the registered callback function
// in the same way we can have mutliple events being emitted
customEmitter.emit("response", "Josh", 43);

// Rules to Followed
// 1. An application can have multiple event emitters and event listeners for particular event or multiple events
// 2. Order Matters - First we need to have a listener (on) method and then we should have emit method
// 3. we can pass the arguments when we are emitting an event and the listener have the choice to recieve the arguments, this doesn't break any code
