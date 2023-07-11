//Program to Find and Print Nth Fibonacci Numbers

function fibonacci(n) {
	if (n == 0 || n == 1) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

var x = fibonacci(7);

console.log(x);
