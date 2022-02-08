// Requesting a JSON file from an external file

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		// const response = JSON.parse(xhttp.responseText);
        const response = xhttp.response;
		response.map(data =>
			console.log(
				data.title +
					'\n' +
					data.timeframes.weekly.current +
					'\n' +
					`Last Week ${data.timeframes.weekly.previous}`
			)
		);
	}
};
xhttp.open('GET', 'data.json', true);
xhttp.responseType = 'json';
xhttp.send();
