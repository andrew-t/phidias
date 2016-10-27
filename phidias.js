(function() {
	document.addEventListener('DOMContentLoaded', resize);
	window.addEventListener('resize', resize);

	function resize() {
		resizeElements(document.getElementsByClassName('phidias'));
		resizeElements(document.getElementsByTagName('img'));
		resizeElements(document.getElementsByTagName('iframe'));
	}

	function resizeElements(elements) {
		for (var i = 0; i < elements.length; ++i)
			resizeElement(elements[i]);
	}

	function resizeElement(element) {
		var width = element.getAttribute('width'),
			height = element.getAttribute('height');
		if (width && height)
			element.style.height = element.clientWidth * height / width + 'px';
	}
})();
