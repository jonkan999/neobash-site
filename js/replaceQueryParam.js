export function replaceQueryParam(param, newval) {
	var currentUrl = window.location.href;
	var newUrl = new URL(currentUrl);
	newUrl.searchParams.set(param, newval);
	window.history.pushState({}, "", newUrl);
}
