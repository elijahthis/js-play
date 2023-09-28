const clickObservable = Rx.Observable.fromEvent(document, "mousemove");

clickObservable.subscribe((event) => {
	console.log(event);
});
