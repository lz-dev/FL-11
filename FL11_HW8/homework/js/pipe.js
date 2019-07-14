function addOne(x) {
  return x + 1;
}

function pipe(num) {
  let currentResult = num;
  for (let i = 1; i < arguments.length;i++) {
     currentResult = arguments[i](currentResult)
  }
  return currentResult;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));