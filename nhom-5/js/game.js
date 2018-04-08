

  $(document).ready(function(){
   

        //GLOBAL ARRAY OF OBJECTS
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

      //GLOBAL VARIABLES
//------------------------------------------
  var clickSwitch = true; //BOOLEAN TO SWITCH QUESTIONS ON ANSWER CLICKS
  var index = 0;
  var correct = 0;
  var incorrect = 0;

  function incrementQuestion(){
    if(index==4) {
      index = 0;
      correct = 0;
      incorrect = 0;
    }else index++;
  }

      //FUNCTION POPULATES QUESTIONAREA
//------------------------------------------
function populateQuestionArea(){

  $(".questionArea").html(triviaBucket[index].question);
  $("#1_1").html(triviaBucket[index].trueAnswer);
  $("#1_2").html(triviaBucket[index].falseOne);
  $("#1_3").html(triviaBucket[index].falseTwo);
}
//------------------------------------------


//START BUTTON
//------------------------------------------
$('#startButton').on("click", function(){

  // timer();
  index = 0;
  correct = 0;
  incorrect = 0;
  populateQuestionArea()
  console.log("clickswitch is now = " + clickSwitch);

  });
  //------------------------------------------


  //ASWER BUTTON CLICK FUNCTION.
  //------------------------------------------
  $(document).on("click", ".answerBlock", function(){
  var $this = this;

  var clickIdentifier = $(this).attr('id');
  if (clickIdentifier == '1_1') {
  // console.log('true!');
    clickSwitch = false;
    correct++;
    $("#wins").html("Correct " + correct);
    console.log(correct + " is the number of correct answers");
        window.onbeforeunload = function(event)
        {
            return confirm("Confirm refresh");
        };
    incrementQuestion();
    populateQuestionArea();
    } else {
    clickSwitch = false;
    incorrect++;
    $("#losses").html("Awww! " + incorrect);
    console.log(incorrect + " is the number of incorrect answers");
    incrementQuestion();
    populateQuestionArea();
    }
  });

  
}); //Document ready endtag.

//------------------------------------------
