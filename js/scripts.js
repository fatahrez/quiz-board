var seconds = 0,
    minutes = 0,
    hours = 0,
    t;

    function add() {
      var h1 = document.getElementById('timer');
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds: "0" + seconds)
      timer();
}

    function timer(){
      t = setTimeout(add, 1000);
    }
    timer();


var quiz_topic = "webDev"; //Topic name for Quiz
var curr_index = -1;
var score = 0;//Saves total score
var scores = []//Saves cumulative score for individual questions

var questions=[
    {
    question: "What is hypertext markup languge in short?",
    choices: ["HMLT","HTML","HTLM", "HMTL"],
    answer: "HTML",
  },
  {
  question: "What is the other name for javascript?",
  choices: ["ECMAscript","JS","script", "WebD"],
  answer: "ECMAscript",
  },
  {
  question: "Who is the Best Programmer?",
  choices: ["Steve Jobs","Bill Gates","Mark Zuckerberg","Fatah Obviously"],
  answer: "Fatah Obviously",
  },
]

var total = questions.length; // Total number of questions

//following hides the result graph and shows the first question
window.onload = function(){
  $("#graph").hide();// hide result graph
  changeQuestion();//show first question
};

//Changes question and option text if question not exhausted or else shows result graph
function changeQuestion(){
  curr_index++;
  $('.myb').prop('disabled', false);

  if (curr_index >= total) {
    time_tot = document.getElementById("timer").textContent;
    var element2 = document.getElementById("canvas");
    element2.style.display ='none';
    //showGraph();
  } else{
    var q_obj = questions[curr_index];
    var q_text = q_obj.question;
    var opt1 = q_obj.choices[0];
    var opt2 = q_obj.choices[1];
    var opt3 = q_obj.choices[2];
    var opt4 = q_obj.choices[3];
    document.getElementById("q_id").textContent = 'Question ' + (curr_index + 1) + '/' + total;
    document.getElementById("score").textContent = 'Score ' + score + '/' + (100 * total);
    document.getElementById("question_text").textContent = q_text;
    document.getElementById("option1").textContent = opt1;
    document.getElementById("option2").textContent = opt2;
    document.getElementById("option3").textContent = opt3;
    document.getElementById("option4").textContent = opt4;
    document.getElementById("resource").value = quiz_topic;

    //Reset the color of option buttons
    var elements = document.getElementByClassName('option');
    for (i=0; i< elements.length; i++){
      ob = elements[i];
      $(ob).removeClass('btn-danger');
      $(ob).removeClass('btn-success');
    }
  }
}

    function changeColor(obj){
      var selected_ans = document.getElementById($(obj).attr('id')).innerHTML;
      if (selected_ans == questions[curr_index].answer) {
        $(obj).addClass('btn-success');
        score += 100;
      } else {
        $(obj).addClass('btn-danger');
        var elements = document.getElementsByClassName('option');
        for (i = 0; i < elements.length; i++) {
          ob =elements[i];
          var selected_ans = document.getElementById($(ob).attr('id')).innerHTML;

          if (selected_ans == questions[curr_index].answer) {
            $(ob).addClass('btn-success');
          }
          $(obj).blur();
        }
      }

        setTimeout(function(){
          $("#canvas").fadeOut();
          setTimeout(function(){
            $("#canvas").fadeIn("slow", changeQuestion());
          }, 1000)
        }, 1500);

        scores.push(score);//Add cumulative score to score array
      }

          $(document).ready(function(){
            $("body").css("background-colour", "#ffffff");
            $("body").css("color","#000000")
          });

          boxes = $('.btn-hg');
          maxHeight = Math.max.apply(
            Math, boxes.map(function(){
              return $(this).height();
            }).get());
         boxes.height(maxHeight + 30);
