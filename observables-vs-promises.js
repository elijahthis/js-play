const { Observable } = rxjs;

const myObservable = new Observable((observer) => {
	setTimeout(() => {
		observer.next("Hello 1");
		observer.next("Hello 2");
		observer.next("Hello 3");
	}, 1000);
});

const ll = myObservable.subscribe((value) => {
	console.log(`observable-value: ${value}`);
});

// ll.unsubscribe();

const myPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Hello Only");
	}, 1000);
});

myPromise.then((value) => console.log(`promise-value: ${value}`));
