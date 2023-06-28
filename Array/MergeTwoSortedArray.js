// Merge Two sort Array of Length n and m in time complexity of O(n+m)

var arr1 = [1, 3, 5, 7, 9]; // var n=5;
var arr2 = [2, 4, 6, 8]; // var m = 4;

var i = 0;
var j = 0;

var merged = [];

while (i < arr1.length && j < arr2.length) {
	if (arr1[i] <= arr2[j]) {
		merged.push(arr1[i]);
		i++;
	} else {
		merged.push(arr2[j]);
		j++;
	}
}

// remaing elements of any one array

//if any elements remaining in array 1
while (i < arr1.length) {
	merged.push(arr1[i]);
	i++;
}

//if any elements remaining in array 2
while (j < arr2.length) {
	merged.push(arr2[j]);
	j++;
}

console.log(merged);
