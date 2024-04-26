/* Adding the html files for each one that wants to be implemented */
const pages = ["slideshows/belhavenSlideshow.html", "slideshows/caytonSlideshow.html", "slideshows/croydeSlideshow.html", "slideshows/dalmoreSlideshow.html", "slideshows/fistralSlideshow.html", "slideshows/llangennithSlideshow.html", "slideshows/porthlevenSlideshow.html", "slideshows/portrushSlideshow.html", "slideshows/thursoSlideshow.html", "slideshows/tullanSlideshow.html"]

let currentPageIndex = 0;

/* Load the page to be embedded on the homepage */
function loadPage(pageIndex) {
	const iframe = document.getElementById("embeddedPage");
	iframe.src = pages[pageIndex];
}

/* Changing the current page to be 1 previous to the one initially loaded */
function prevPage() {
	currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
	loadPage(currentPageIndex);
}

/* Changing the current page to be 1 next to the one initially loaded */
function nextPage() {
	currentPageIndex = (currentPageIndex + 1) % pages.length;
	loadPage(currentPageIndex);
}

/* Would have been the code to load any beaches that were liked into the liked beaches page */
/*function likePage() {
	var listContainer = document.getElementById("likedBeachList");
	var newFilePath = pages[index];
	
	listContainer.innerHTML = "<<iframe id="embeddedPage" src='" + newFilePath + "'></iframe>";
	
	likeBeachList.forEach(function(file, index)) {
		listContainer.innerHTML += "<<iframe id="embeddedPage" src='" + newFilePath + "'></iframe> <br><br>";
	}
}*/

/* Initially load the first embedded file onto the homepage */
loadPage(currentPageIndex);