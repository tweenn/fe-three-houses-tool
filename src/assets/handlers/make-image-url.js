
export default (url, params = {}) => {

	let processedParams = Array.from(Object.keys(params)).map((param) => {
		return `${param}=${params[param]}`;
	}).join('&') || '';

	if (processedParams !== '') {
		processedParams = '?' + processedParams;
	}

	if (window.location.href.indexOf('localhost') >= 0) {
		return `./img/${url}${processedParams}`;
	} else {
		return `https://afyyhxifoo.cloudimg.io/v7/${window.location.href}img/${url}${processedParams}`;
	}
}
