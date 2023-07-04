// Print all pairs with given sum

/*
Given an array of integers, and a number ‘sum’, print all pairs in the array whose sum is equal to ‘sum’.

Examples :
Input  :  arr[] = {1, 5, 7, -1, 5}, 
          sum = 6
Output : (1, 5) (7, -1) (1, 5)

Input  :  arr[] = {2, 5, 17, -1}, 
          sum = 7
Output :  (2, 5)

*/

//*************** BOOTFORCE SOLUTION ******************************

let arr = [1, 5, 7, -1, 5];
let sum = 6;

let n = arr.length;

for (let i = 0; i < n; i++) {
	for (let j = i + 1; j < n; j++) {
		let target = arr[i] + arr[j];
		if (target === sum) {
			console.log(arr[i], arr[j]);
		}
	}
}

//----------------------------------------------------------------------------------------------------------------------------------------

// Method 2 (Use hashing)

let obj = {};

for (let i = 0; i < n; i++) {}
