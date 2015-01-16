(function() {
	document.addEventListener('DOMContentLoaded', resize);
	window.addEventListener('resize', resize);

	function resize() {
		['img', 'iframe'].forEach(function(tagName) {
			var elements = document.getElementsByTagName(tagName);
			for (var i = 0; i < elements.length; ++i) {
				var element = elements[i],
					width = element.getAttribute('width'),
					height = element.getAttribute('height');
				if (width && height)
					element.style.height = element.clientWidth * width / height + 'px';
			}
		})
	}
})();
