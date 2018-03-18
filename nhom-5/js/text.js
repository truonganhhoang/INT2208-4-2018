var data = "inputText.txt";
var arr = [];//mang cac bo tu
var count = 0;
var flipped = false;//để lật thẻ về mặt trước mối khi bấm continue hoặc load
var ranId = 0;//chi so mang arr
var ranEle = 0;//word hay mean
var question = "";
var result = 0;

//chon bo tu
function generate(){
	console.log("generate");
	ranId = Math.floor((Math.random()*4)+0);
	ranEle = Math.floor((Math.random()*1)+0);
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

//tinh diem va kiem tra dap an
function check(){
	var cont = "";
	var flag = false;
	$('input').keyup(function(){
			cont = $(this).val();
		}
	).keyup();
	console.log("check "+ cont);
	if(ranEle == 1){
		if(cont == arr[ranId].mean){
			flag = true;
			result++;
			if(ranId == 4) ranId = 0;
			else ranId++;
			ranEle = Math.floor((Math.random()*1)+0);
		}
	} else {
		if(cont == arr[ranId].word){
			flag = true;
			result++;
			if(ranId == 4) ranId = 0;
			else ranId++;
			ranEle = Math.floor((Math.random()*1)+0);
		}
	}
	
	if(ranEle == 1) question = arr[ranId].word;
	else question = arr[ranId].mean;
	document.getElementById('learnCard').innerHTML = question;
	console.log(document.getElementById('learnCard').innerHTML);
	$('input').disabled = true;
	if(flag){
		alert("Great");
	}else{
		alert("Wrong");
	}
	setTimeout(function() {
		$('input').val("");
	},200);
	// $('button#anounce').find("span").text("Check...");
	if(result == 5) alert("You are Excellent, the Challenge is completed");
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
	if(count >= 4) count = 0;
	else count++;
	$('.card .front').find("span").text(arr[count].word);
	$('.card .back').find("span").text(arr[count].mean);
}

//khoi tao mang cac bo tu
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
	$('.card .front').find("span").text(arr[count++].word);
	$('.card .back').find("span").text(arr[count++].mean);
}

