// In browsers we use the API call, so we offload the task and execute the callback function when the task is compeleted
// using fetch is good example for the statement
// but still we can get an idea by using the below task
console.log("first task");
// even we set out the time to be 0 seconds, callback will be executed only when the next task is completed
// because it is offloading the time consuming operations to the browser
setTimeout(() => {
  console.log("second task");
}, 0);

console.log("next task");
