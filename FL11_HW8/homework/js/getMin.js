function getMin() {
  let minArg = arguments[0];
  for (let i=1;i<arguments.length;i++) {
     if (arguments[i] < minArg) {
	minArg = arguments[i];
     }
  }
 return minArg;
}

console.log(getMin(3,0,-3))