let A = parseInt(prompt('Enter length of side A :', ''));
let B = parseInt(prompt('Enter length of side B :', ''));
let C = parseInt(prompt('Enter length of side C :', ''));

if (isNaN(A) || isNaN(B) || isNaN(C)) {
    console.log('Incorrect input !')
} else {
  if (A + B > C && A + C > B && B + C > A) {
    if (A === B && B === C) {
        console.log('Equivalent triangle')
    } else if (A === B || B === C || A === C) {
        console.log('Isosceles triangle')
    } else {
        console.log('Normal triangle')
    }
  } else {
    console.log('Triangle is not exists !')
  }
}