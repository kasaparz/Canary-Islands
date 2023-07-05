const iframe = document.createElement("iframe");
const left = document.querySelector(".left");
left.append(iframe);
iframe.src = "./welcome.html";

document.querySelector(".map").addEventListener("click", (ev) => {
	if (ev.target.matches("a[href]")) {
		ev.preventDefault();
		window.location.hash = `#${ev.target.innerText}`;
		iframe.src = ev.target.getAttribute("href");
	} else {
		iframe.src = "./welcome.html";
	}
});
