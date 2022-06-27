// this piece of code is run on browser since we are using document which is DOM object
// Here JavaScript is Synchronous and Single Threaded
// It executes the next task only when it completes the second task (for loop) which is time consuming
console.log("first task");

console.time();
// we cannot offload for loops to the browser
for (let i = 0; i < 100000000; i++) {
  const h3 = document.querySelector("h3");
  h3.textContent = "Hey, Everyone is waiting on me";
}
console.timeEnd();

console.log("next task");
