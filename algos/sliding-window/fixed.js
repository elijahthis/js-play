// Here we'll explore solving sub-array problems using the Sliding Window technique

const numArr = [1, 2, 3, 4, 5, 6];

// /*
function generateSubArrays(arr, n) {
	// generate all subarrays of length n

	let arrayList = [];
	let subArr = arr.slice(0, n);

	arrayList.push(subArr);

	for (let i = 0; i < arr.length - n; i++) {
		let newArr = arr.slice(i + 1, i + n);
		newArr.push(arr[i + n]);

		arrayList.push(newArr);
	}

	return arrayList;
}

console.log("generateSubArrays: ", generateSubArrays(numArr, 2));

// */

function generateArrayOfSums(arr, n) {
	if (n > arr.length)
		throw new Error("Length of subArray cannot be greater than array length");
	else if (n < 1) throw new Error("Length of subArray cannot be less than 1");

	//generate the sums of every subarray of length n
	let sumList = [];
	let currSum = 0;

	for (let i = 0; i < n; i++) {
		currSum += arr[i];
	}
	sumList.push(currSum);

	for (let i = 0; i < arr.length - n; i++) {
		currSum = currSum - arr[i] + arr[i + n];
		sumList.push(currSum);
	}

	return sumList;
}

console.log("generateArrayOfSums: ", generateArrayOfSums(numArr, 2));
