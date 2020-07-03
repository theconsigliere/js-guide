/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};


/*!
 * EXAMPLE OF HOW TO USE IT
 */

var image = document.querySelector('[data-image]');
window.addEventListener('scroll', function (event) {
	if (isInViewport(image)) {
		image.innerHTML = '<img src="' + image.getAttribute('data-image') + '">';
	}
}, false);