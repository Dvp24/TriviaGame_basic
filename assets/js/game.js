
var selected;
var index = 0;
var repeat;

// repeat = setInterval(nextQuestion,10);
repeat = setInterval(nextQuestion,5000);
$(".opt1").on("click",function(){
  var clicked = $(this).text();
  console.log(clicked);

})

for(var i =0 ; i < Science.length; i++){
  nextQuestion(i);
}

function nextQuestion(x){
  selected = Science[index];
  console.log(selected);

var allText = $("<div>");
$("<h5>").text(Science[x].que).appendTo(allText);
$("<div>").addClass("opt");
$(".opt").text(Science[x].options).appendTo(allText);
$(".play").append(allText);


  // if(index > 8){
  //   stop();
  // }else{
  //   index++;
  // }
}
function stop(){
  clearInterval(repeat);
}