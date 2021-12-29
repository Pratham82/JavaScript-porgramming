(function execute(){
  console.log(1); 
  var p = new Promise((resolve) => setTimeout(() => resolve(2), 10))
  p.then(console.log)

  setTimeout(() => console.log(3),0)
  setTimeout(() => console.log(5),0)
  Promise.resolve(4).then(console.log)
  console.log(6);
  const a = new Promise((resolve) => setTimeout(() => resolve(4.5), 0))
  a.then(console.log)
})();

/*

first it will log 1 and 6 because these are sync task, that's why ran directly
1
6

- because 4 is the first thing was added in microtask queue 
4

- 3,5, and 4.5 all are timeOut functions so it will be added to web browser's API
once executed added to callback queue and executed in the same order of invocation
3
5
4.5


- Finally 2 will be the last thing because it has the longest timer, once the time is went off
the output will be sent to callback and further added to call-stack for execution 
2


**Note: In general micro-task takes precedence. Whenever the call-stack is empty, js engine will first check microtask queue before going to callback queue



*/