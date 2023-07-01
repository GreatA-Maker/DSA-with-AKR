// Two Sum using Sorting and Two-Pointers technique

// To bring time complexity from O(N^2) to O(N)

/*
Given an array arr[] of n numbers and target x,
the task is to check whether or not there exist two elements in arr[] whose sum is exactly x. 
*/

let arr = [0, -1, 2, -3, 1];
var target = -2;

let i = 0;
let j = arr.length - 1;

//sort the array, because two pointers works only on sorted array

var flag = false;

while (i < j) {
	let sum = arr[i] + arr[i];
	if (sum === target) {
		flag = true;
		break;
	} else if (sum > target) {
		i++;
	} else {
		j--;
	}
}

if (flag) {
	console.log("Yes");
} else {
	console.log("No");
}
