export function dropQueryParam(param) {
	var currentUrl = window.location.href;
	var newUrl = new URL(currentUrl);
	newUrl.searchParams.delete(param);
	window.history.pushState({}, "", newUrl);
}
