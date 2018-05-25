var arr = [];//mang cac bo tu
var count = 0;
var flipped = false;//để lật thẻ về mặt trước mối khi bấm continue hoặc load
var ranId = 0;//chi so mang arr
var ranEle = 0;//word hay mean
var question = "";
var result = 0;
var loaded = false;



//lat the

$(document).ready(function(){
	console.log("load");
	
	// if(arr.length == 0){
		fetch('/clicked', {method: 'POST'})
		    .then(function(response) {
		      if(response.ok) {
		        console.log('click was recorded');
		        return;
		      }
		      throw new Error('Request failed.');
		    })
		    .catch(function(error) {
		      console.log(error);
		    });
		// button.addEventListener('click', function(e) {
		//   console.log('button was clicked');

		  
		// });

		setInterval(function() {
		  fetch('/clicks', {method: 'GET'})
		    .then(function(response) {
		      if(response.ok) return response.json();
		      throw new Error('Request failed.');
		    })
		    .then(function(data) {
		      
		      	
		      	for(var i = 0; i < data.length; i++){
		      		var ele = {
		      			word: data[i].word,
		      			mean: data[i].mean
		      		};
		      		arr[i] = ele;
		      	}
		      	// console.log(arr);
		      	return;
		    })
		    .catch(function(error) {
		      console.log(error);
		    });
		}, 0);
		
	// }
});
function next(){
	
 	// else{
		if(count == 4) window.location = "/test";
		else count++;
		document.getElementById('front').innerHTML = arr[count].word;
		document.getElementById('back').innerHTML = arr[count].mean;
		var elem = document.getElementById("myBar");   
		  var width;
		  var id = setInterval(frame, 10);
		  function frame() {
		    if (width >= 100) {
		      clearInterval(id);
		    } else {
		      width = (100/arr.length)*(count+1); 
		      elem.style.width = width + '%'; 
		    }
		  }
	// }


}
var $ = window.jQuery;
function flip() {
	// flipped = !flipped;
    $(".card").toggleClass('flipped');
    // $("#card").flip();
    // $('.card').flip({
    //     trigger: "click"
    //  });
    // $('.cardSmall').flip({
    //     trigger: "hover"
    //  });
     $(".cardSmall").toggleClass('flipped');
}




