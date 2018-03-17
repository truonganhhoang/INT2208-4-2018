var data = "input.txt";
var arr = [];
var count = 0;
var flipped = false;//để lật thẻ về mặt trước mối khi bấm continue hoặc load
function flip() {
	flipped = !flipped;
    $('.card').toggleClass('flipped');
}
function change(){
	if(flipped) {
		flip();
	}
	if(count >= 4) count = 0;
	else count++;
	$('.card .front').find("span").text(arr[count].word);
	$('.card .back').find("span").text(arr[count].mean);
}
function load(){
	count  = 0;
	if(flipped) {
		flip();
	}
	//var reader = new FileReader();
	for(var i = 0; i < 5; i++){
		var ele = {
			word : "",
			mean : ""
		};
		arr[i] = ele;
	}
	arr[0].word = "learn";
	arr[0].mean = "học";
	arr[1].word = "chicken";
	arr[1].mean = "gà";
	arr[2].word = "peach";
	arr[2].mean = "đào";
	arr[3].word = "sing";
	arr[3].mean = "hát";
	arr[4].word = "beautiful";
	arr[4].mean = "đẹp";
}

