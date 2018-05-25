


  

    //Mang du lieu cho cau hoi
    // ------------------------------------------
var bucket = [];

  //bien toan cuc
  //------------------------------------------
  var clickSwitch = true; //doi cau hoi
  var index = 0;
  var correct = 0;
  var incorrect = 0;
  var ans;
  var started = false;
  var arr = [];
  // var rightSong = new Audio();
  // rightSong.type = 'audio/mpeg';
  // rightSong.src = 'music/dung.mp3';
  // var wrongSong = new Audio();
  // wrongSong.type = 'audio/mpeg';
  //wrongSong.src = 'music/sai.mp3';

window.onload = function(){
  
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
            return;
        })
        .catch(function(error) {
          console.log(error);
        });
    }, 0);
    console.log(arr);
    
}
  function incrementQuestion(){
    if(index==4) {
      setTimeout(function(){
        window.location.href = "/chucmung";
      },1000);
    }else index++;
  }

  //sinh cau hoi
  //------------------------------------------
  function populateQuestionArea(){
    var falseOne = Math.floor(Math.random()*5+1);
    while(falseOne == index+1){
      falseOne = Math.floor(Math.random()*5+1);
    }
    var falseTwo = Math.floor(Math.random()*5+1);;
    while(falseTwo == falseOne || falseTwo == index+1){
      falseTwo = Math.floor(Math.random()*5+1);
    }

    $(".questionArea").html(arr[index].word);
    var ran = Math.floor(Math.random()*3+1);
    if(ran == 1){
      ans = '1';
      $("#1").html(arr[index].mean);
      $("#2").html(arr[falseOne-1].mean);
      $("#3").html(arr[falseTwo-1].mean);
    }else if(ran == 2){
      ans = '2';
      $("#2").html(arr[index].mean);
      $("#1").html(arr[falseOne-1].mean);
      $("#3").html(arr[falseTwo-1].mean);
    }else{
      ans = '3';
      $("#3").html(arr[index].mean);
      $("#2").html(arr[falseOne-1].mean);
      $("#1").html(arr[falseTwo-1].mean);
    }
    console.log("populateQuestionArea " + ans);
  }
  //------------------------------------------


  //click nut Start
  //------------------------------------------
function start(){
    // // if(arr.length == 0){
    //   var button = document.getElementById('startButton');
    //   button.addEventListener('click', function(e) {
    //     console.log('button was clicked');

    //     fetch('/clicked', {method: 'POST'})
    //       .then(function(response) {
    //         if(response.ok) {
    //           console.log('click was recorded');
    //           return;
    //         }
    //         throw new Error('Request failed.');
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
    //   });

    //   setInterval(function() {
    //     fetch('/clicks', {method: 'GET'})
    //       .then(function(response) {
    //         if(response.ok) return response.json();
    //         throw new Error('Request failed.');
    //       })
    //       .then(function(data) {
            
    //           console.log(data);
    //           for(var i = 0; i < data.length; i++){
    //             var bucEle = {
    //               question: data[i].word,
    //               trueAnswer: data[i].mean
    //             };
    //             bucket[i] = bucEle;
    //             var arrEle = {
    //               word: data[i].word,
    //               mean: data[i].mean
    //             };
    //             arr[i] = arrEle;
    //           }
    //           return;
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
    //   }, 0);
    // // }
    console.log(arr);
    started = true;
    index = 0;
    correct = 0;
    incorrect = 0;
    $("#wins").html("Correct " + correct);
    $("#losses").html("Wrong! " + incorrect);
    populateQuestionArea();
    console.log("clickswitch is now = " + clickSwitch);

  }
    //------------------------------------------


    //click cau tra loi
function answer(clickIdentifier){
    console.log("answer " + ans);
    console.log("answer clickIdentifier " + clickIdentifier);
    if(started){
      if (clickIdentifier == ans) {
        
        // rightSong.play();
        
        clickSwitch = false;
        correct++;
        $("#wins").html("Correct " + correct);
            // window.onbeforeunload = function(event)
            // {
            //     return confirm("Confirm refresh");
            // };
        setTimeout(function(){
          incrementQuestion();
          populateQuestionArea();
        },1000);
      } else {
        // wrongSong.play();
        // clickSwitch = false;
        incorrect++;
        $("#losses").html("Wrong! " + incorrect);
        // console.log(incorrect + " is the number of incorrect answers");
      }
    }
  }

  