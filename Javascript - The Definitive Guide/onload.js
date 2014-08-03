function onLoad(f) {
	if (onLoad.loaded)								// if document is already loaded
		window.setTimeout(f, 0);					// queue f to be run as soon as possible
	else if (window.addEventListener)				// standard event registration method
		window.addEventListener("load", f, false);	
	else if (window.attachEvent)					// IE8 and earlier use this instead
		window.attachEvent("onload", f);
}