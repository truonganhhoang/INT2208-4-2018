


   

    //Mang du lieu cho cau hoi
    // ------------------------------------------
    var triviaBucket = [

   {
    question: 'learn',
    trueAnswer:'học',
    falseOne: 'gà',
    falseTwo: 'đẹp',
    },

  {
    question: 'chicken',
    trueAnswer: 'gà',
    falseOne: 'đào',
    falseTwo: 'hát',
    },

  {
    question: 'sing',
    trueAnswer: 'hát',
    falseOne: 'đẹp',
    falseTwo: 'học',
    },

  {
    question: 'peach',
    trueAnswer: 'đào',
    falseOne: 'gà',
    falseTwo: 'đẹp',
    },

  {
    question: 'beautiful',
    trueAnswer: 'đẹp',
    falseOne: 'gà',
    falseTwo: 'đào',
    }

 ];

  //bien toan cuc
  //------------------------------------------
  var clickSwitch = true; //doi cau hoi
  var index = 0;
  var correct = 0;
  var incorrect = 0;
  var ans;
  var started = false;
  // var rightSong = new Audio();
  // rightSong.type = 'audio/mpeg';
  // rightSong.src = 'music/dung.mp3';
  // var wrongSong = new Audio();
  // wrongSong.type = 'audio/mpeg';
  //wrongSong.src = 'music/sai.mp3';
  function incrementQuestion(){
    if(index==4) {
      setTimeout(function(){
        window.location.href = "2.2.html";
      },1000);
    }else index++;
  }

  //sinh cau hoi
  //------------------------------------------
  function populateQuestionArea(){
    var ran = Math.floor(Math.random()*3+1);
    console.log(ran);
    $(".questionArea").html(triviaBucket[index].question);
    if(ran == 1){
      ans = '1';
      $("#1").html(triviaBucket[index].trueAnswer);
      $("#2").html(triviaBucket[index].falseOne);
      $("#3").html(triviaBucket[index].falseTwo);
    }else if(ran == 2){
      ans = '2';
      $("#2").html(triviaBucket[index].trueAnswer);
      $("#1").html(triviaBucket[index].falseOne);
      $("#3").html(triviaBucket[index].falseTwo);
    }else if(ran == 3){
      ans = '3';
      $("#3").html(triviaBucket[index].trueAnswer);
      $("#1").html(triviaBucket[index].falseOne);
      $("#2").html(triviaBucket[index].falseTwo);
    }
    console.log("populateQuestionArea " + ans);
  }
  //------------------------------------------


  //click nut Start
  //------------------------------------------
function start(){
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
        console.log(incorrect + " is the number of incorrect answers");
      }
    }
  }

  