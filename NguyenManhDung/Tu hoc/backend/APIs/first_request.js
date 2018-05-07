var request = require("request");
request('http://www.omdbapi.com/?s=c', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});