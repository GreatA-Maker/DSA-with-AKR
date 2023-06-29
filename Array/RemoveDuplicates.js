// Remove Duplicates from Given Array without using Objects/Hashs.

var arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7];
var n = arr.length;
var j = 0;

for (var i = 0; i < n; i++) {
	if (arr[i] != arr[i + 1]) {
		//console.log(arr[i] + " " + arr[i + 1]);
		arr[j] = arr[i];
		j++;
	}
}
var out = "";

for (var i = 0; i < j; i++) {
	out = out + arr[i] + " ";
}

console.log(out);
