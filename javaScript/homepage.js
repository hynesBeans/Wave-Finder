const pages = ["slideshows/belhavenSlideshow.html", "slideshows/caytonSlideshow.html", "slideshows/croydeSlideshow.html", "slideshows/dalmoreSlideshow.html", "slideshows/fistralSlideshow.html", "slideshows/llangennithSlideshow.html", "slideshows/porthlevenSlideshow.html", "slideshows/portrushSlideshow.html", "slideshows/thursoSlideshow.html", "slideshows/tullanSlideshow.html"]

let currentPageIndex = 0;
	
function loadPage(pageIndex) {
	const iframe = document.getElementById("embeddedPage");
	iframe.src = pages[pageIndex];
}

function nextPage() {
	currentPageIndex = (currentPageIndex + 1) % pages.length;
	loadPage(currentPageIndex);
}

function prevPage() {
	currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
	loadPage(currentPageIndex);
}

loadPage(currentPageIndex);