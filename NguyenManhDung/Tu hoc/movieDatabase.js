var movies = [{
		title: "The flash",
		rating: 4.5,
		hasWatched: true
	}, {
		title: "The 100",
		rating: 4.5,
		hasWatched: true
	}, {
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	}, {
		title: "The penguins of Madagasca",
		rating: 4,
		hasWatched: true
	}
];
// verb: watched or not
var verb;

movies.forEach(function (movie){
	buildSentence(movie);
});

function buildSentence(movie) {
	if (movie.hasWatched === true) verb = "have seen";
	else verb = "have not seen";
	console.log("You " + verb + " \"" + movie.title + "\"  " + "- " + movie.rating + " stars");
}