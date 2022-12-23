const add = function(num1, num2) {
	let sum = 0;
  return sum+=num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	if(!arr.length) return 0;
  let sum = 0;
  for(let i = 0; i<arr.length ; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(nums) {
let prod = 1;
if(!nums.length) return 1;
for(let i = 0; i<nums.length; i++){
  prod*= nums[i];
}
return prod;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if(num === 0) return 1;
  if(num === 1) return 1;

  return num* factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
