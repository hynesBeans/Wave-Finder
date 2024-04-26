let slideIndex = 1;

/* Gain the initial photo/slide */
showSlides(slideIndex);

/* Call the function to gain the next or previous slide */
function plusSlides(n) {
	showSlides(slideIndex += n);
}

/* Call the function ot gain the slide from usage of dot buttons */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Function to determine what image is sent to display */
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	
	/* Checking for first and last items in the array and looping back to beginning or end */
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	
	/* Deactivate other dots and images */
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	/* Activate the wanted image and dot */
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}