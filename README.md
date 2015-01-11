# phidias
Keep images in their correct aspect ratio without sacrificing a fluid load

HTML lets you set the width of an image but not the height, and it will work out the height so the aspect ratio is correct. That does mean that until the image loads the page layout is variable, which can be annoying. Wordpress puts in both width and height automatically and it seemed a shame to throw that information away for a fluid page layout, so this script fixes the aspect ratio of images based on `width` and `height` tags every time the page resizes (which I assume is the only time these images will actually change size).
