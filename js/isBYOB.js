export function isBYOB(byob, articleCond) {
	if (byob) {
		if (articleCond === "0") {
			return false;
		}
	}
	return true;
}
