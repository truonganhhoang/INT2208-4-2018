var data = "inputText.txt";
var arr = [];//mang cac bo tu
var count = 1;
var flipped = false;//để lật thẻ về mặt trước mối khi bấm continue hoặc load
var ranId = 0;//chi so mang arr
var ranEle = 0;//word hay mean
var question = "";
var result = 0;
var loaded = false;
//chon bo tu
function generate(){
	console.log("generate");
	ranId = Math.floor((Math.random()*4)+0);
	ranEle = Math.floor((Math.random()*5)+1);
	if(ranEle == 1) question = arr[ranId].word;
	else question = arr[ranId].mean;
	document.getElementById('learnCard').innerHTML = question;
}

// khoi tao khi bam Start hoac Challenge
function initChallenge(){
	console.log("initChallenge");
	load();
	generate();
	result = 0;
}


//lat the
function flip() {
	flipped = !flipped;
    $('.card').toggleClass('flipped');
}

//thay doi bo tu tren the
function change(){
	if(flipped) {
		flip();
	}
	if(loaded==false) load();
	else{
		if(count >= 4) count = 0;
		else count++;
		$(".card .front").html(arr[count].word);
		$(".card .back").html(arr[count].mean);
	}
}

//khoi tao mang cac bo tu
function load(){
	loaded = true;
	console.log("load");
	count  = 1;
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
	$(".card .front").html(arr[count].word);
	$(".card .back").html(arr[count].mean);
	count++;
}


