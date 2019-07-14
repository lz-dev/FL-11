function reverseNumber(inputNum) {
   let str = inputNum.toString()
   let startIndex = 0;
   let resultStr = "";
   if (str[startIndex] === '-') {
      startIndex = 1;
      resultStr = "-";
   }

   for (let i = str.length - 1; i >= startIndex; i--) {
	resultStr = resultStr + str[i];
   }

   return parseInt(resultStr);
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
