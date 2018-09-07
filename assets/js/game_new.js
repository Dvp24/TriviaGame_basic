var Sci = [
  {
    qNumber: 1,
    que: "Which discipline of engineering deals with the recording and reproduction of sound?",
    options: ["Audio", "Video", "Food", "Geology"],
    correct: "Audio"
  }, {
    qNumber: 2,
    que: "Who kidnaps Rapunzel as a baby?",
    options: ["Mother Gothel", "Maximus", "Father Gogo", "Eugene"],
    correct: "Mother Gothel"
  }, {
    qNumber: 3,
    que: "What do the King and Queen do every year in honor of Rapunzel’s birthday?",
    options: ["Build a castle", "Sing a sad song", "Spin hay into gold", "Release paper lanters"],
    correct: "Release paper lanters"
  }, {
    qNumber: 4,
    que: "What does Rapunzel hit Flynn Rider with when they first meet?",
    options: ["A spatula", "A brick", "A frying pan", "A broom"],
    correct: "A frying pan"
  }, {
    qNumber: 5,
    que: "What is Flynn Rider’s real name?",
    options: ["Gregory Bert", "Rapunzolo", "Percy McGinty", "Eugene Fitzherbert"],
    correct: "Eugene Fitzherbert"
  }, {
    qNumber: 6,
    que: "What type of animal is Pascal?",
    options: ["A Chameleon", "A Dog", "A snake", "A Horse"],
    correct: "A Chameleon"
  }, {
    qNumber: 7,
    que: "What does Rapunzel want in return for giving Flynn the crown?",
    options: ["She wants Flynn to marry mother Gothel", "She wants Flynn to buy her a horse", "She wants Flynn to take her to see lanterns", "She wants Flynn to bake her a cake"],
    correct: "She wants Flynn to take her to see lanterns"
  }, {
    qNumber: 8,
    que: "When Rapunzel sings, what does her hair do?",
    options: ["It glows", "It sings back", "It changes color", "it gets shorter"],
    correct: "It glows"
  }, {
    qNumber: 9,
    que: "What color hair does Rapunzel have after Flynn cuts it?",
    options: ["Blonde", "Red", "Brunette", "White"],
    correct: "Brunette"
  }, {
    qNumber: 10,
    que: "Finish the Flynn Rider quote: “I didn’t want to have to do this, but you leave me no choice. Here comes _________”",
    options: ["The laugh", "The smolder", "The shrug", "The singing"],
    correct: "The smolder"
  }
];
var wins = 0;
for(var i = 0 ; i< Sci.length; i++){
  var allText = $("<div>");
  allText.append(Sci[i].que+"<br>");
  var corr = Sci[i].correct;
  console.log(corr)
  // allText.append(Sci[i].options+"<br><br>");
  for( var j = 0 ; j < 4; j++){
  var allOpt = $("<div class = 'opt'>");
  allOpt.append(Sci[i].options[j]+"<br>");
  allText.append(allOpt);
   check();
  }
 
  $(".play").append(allText);
}

function check(){
  $(".opt").on("click",function(){
    var a= $(this).text();
    console.log(a);
  })
}
