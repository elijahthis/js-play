// function reverseArray<T extends string>(list: T[]): T[] {
// 	let result: T[] = [];
// 	for (let i = 0; i < list.length; i++) {
// 		result.push(list[list.length - i - 1]);
// 	}

// 	result.push("do-re-mi");

// 	return result;
// }

// console.log(reverseArray(["a", "b", "c", "d"]));

type Lin = { name: string; age: number; print: (val: string) => void };
interface Lint {
	name: string;
	age: number;
	print: (val: string) => void;
}
interface Lint {
	car: string;
}
// interface Lint {
// 	ss: string;
// }

// const elijah: Lin & { car: string } = {
// 	name: "Elijah",
// 	age: 23,
// 	print: (val: string) => console.log(val),
// 	car: "Hahaha",
// };

// console.log(elijah);

// class Person implements Lint {
// 	public name: string;
// 	public age: number;
// 	public car: string;
// 	public ss: string;
// 	constructor(n: string, a: number, c: string, ss?: string) {
// 		this.name = n;
// 		this.age = a;
// 		this.car = c;
// 		this.ss = ss;
// 	}

// 	print(val: string) {
// 		console.log(val);
// 	}
// }

// const me = new Person("Haha", 12, "Bill", "jherhe");
// console.log(me);

let cc: any = "a";
let employee_code = <number>cc;

console.log(employee_code);
