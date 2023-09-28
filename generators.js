function* myGen(i) {
	for (let ind = 1; ind <= i; ind++) {
		yield ind;
	}
}

const myGenObj = myGen(12);

for (let i of myGenObj) {
	console.log(i);
}
console.log(myGenObj.next().done);
