const numArr = [22, 33, 56, 21, 14, 26, 389];

const linearSearch = (list, searchItem) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i] === searchItem) return i;
	}
	return -1;
};

/* linearSearch(numArr) */
console.log(linearSearch(numArr, 14));
