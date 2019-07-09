/**
 * Examples of everything new in ECMAScript 2016, 2017, and 2018
 * @url https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/
 */

// Array.prototype.includes return true if value exists in array
function arrayPrototypeIncludes() {
	const arr = [1, 2, 3, 4, NaN];
	console.log('arr = ', arr);

	// Instead of
	console.log('arr.indexOf(3): ', arr.indexOf(3));
	console.log('arr.indexOf(NaN): ', arr.indexOf(NaN)); // .indexOf does not find NaN values

	// Use
	console.log('arr.includes(3): ', arr.includes(3));
	console.log('arr.includes(Nan): ', arr.includes(NaN));

	console.log("\n");
}
arrayPrototypeIncludes();

// Provides an operator for exponentiation
function exponentiation() {

	// Instead of
	console.log('Math.pow(7, 2): ', Math.pow(7, 2));
	console.log('Math.pow(3, 3): ', Math.pow(3, 3));

	// Use
	console.log('7 ** 2: ', 7 ** 2);
	console.log('3 ** 3: ', 3 ** 3);

	console.log("\n");
}
exponentiation();
