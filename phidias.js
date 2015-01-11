window.addEventListener('resize', function() {
	var imgs = document.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; ++i) {
		var img = imgs[i]
			width = img.getAttribute('width'),
			height = img.getAttribute('height');
		if (width && height)
			img.style.height = img.clientWidth * width / height + 'px';
	}
});