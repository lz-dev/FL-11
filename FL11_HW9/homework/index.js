function getNumbers(inStr) {
   let numbers = [];
   for (let i = 0; i < inStr.length; i++) {
     let number = parseInt(inStr[i]);
     if (!isNaN(number)) {
	numbers.push(number);
      }
   }
   return numbers;
}

function findTypes() {

  let types ={};
 
  for (let i = 0; i < arguments.length;i++) {
	let argType = typeof arguments[i];
	let typeCount = types[argType];
	if (typeof typeCount === 'undefined') {
          typeCount = 1;
	} else {
          typeCount++;
	}
	types[argType] = typeCount;
  }
  
  return types;

}

function executeforEach(arr, func) {
   for (let i = 0; i < arr.length; i ++) {
    func(arr[i]);
  }
}

function mapArray(arr, func) {
  let mapped = [];
  executeforEach(arr, function(el) {
			mapped.push(func(el)) 
			});
  return mapped;
}

function filterArray(arr, func) {
  let filtered = [];
  executeforEach(arr, function(el) {
			if (func(el)) {
                            filtered.push(el)
				}
			});
  return filtered;
}

function showFormattedDate(inputDate) {
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Dec'];

  return 'Date: ' + months[inputDate.getMonth()] + ' ' + inputDate.getDate() + ' ' + inputDate.getFullYear();
} 

function canConvertToDate(inStr) {
   return new Date(inStr) !== 'Invalid Date';
}

function daysBetween(date1, date2) {
   let millisInDay = 86400000;
   return Math.round((date2.getTime() - date1.getTime()) / millisInDay);
}

function getAmountOfAdultPeople(data) {
  let daysInYear = 365;
  let adultAge = 18;
  let adults = filterArray(data, function(el) { 
	return daysBetween(new Date(el.birthday),new Date()) / daysInYear > adultAge
       });
  return adults.length;                                  
}

function keys(data) {
  let objKeys = []
  for (let property in data) {
     if (data.hasOwnProperty(property)) {
          objKeys.push(property)
       }
  }

  return objKeys; 
}

function values(data) {
  let objValues = []
  for (let property in data) {
     if (data.hasOwnProperty(property)) {
          objValues.push(data[property])
       }
  }

  return objValues; 
}
