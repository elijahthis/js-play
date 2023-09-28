const numArr = [2, 7, 22, 32, 35, 73, 88];

const binarySearch = (list, searchItem) => {
	let start = 0;
	let end = list.length - 1;

	do {
		let mid = Math.floor((start + end) / 2);
		if (list[mid] === searchItem) return mid;
		else if (list[mid] < searchItem) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	} while (start <= end);

	return -1;
};
/* linearSearch(numArr) */
console.log(binarySearch(numArr, 13));

//  Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

// CONDITIONS:
// - The data structure must be sorted.
// - Access to any element of the data structure takes constant time.
