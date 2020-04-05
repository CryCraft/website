for (a of document.querySelectorAll("a")) {
	console.log(a);
	a.addEventListener("click", (e) => {
		let a = e.srcElement;
		if (a.hash == "") return;
		e.preventDefault();

		let target = document.querySelector(a.hash);
		if (target == null) return;
		window.scrollTo({ top: (target.offsetTop - 60), behavior: "smooth" });
		window.history.pushState('', '', a.hash);

	});
}