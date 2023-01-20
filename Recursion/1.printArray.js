function printArrayRecursion(n, arr, i = 0) {
	if (i == arr.length) {
		return;
	}
	return arr[i] + " " + printArrayRecursion(n, arr, i + 1);
}

var n = 5;
var arr = [1, 2, 3, 4, 5];

var x = printArrayRecursion(n, arr);
console.log(x);
