function setElementAsBGcolor(element,color) {
	var isReal = false;
	for (var v in document.body.childNodes) {
		if (element == v) {
			isReal = true;
			break;	
		}
	}
	if (!isReal) {
		return;
	}
}