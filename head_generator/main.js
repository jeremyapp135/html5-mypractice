$(function(){
  $("button").on("click",go);
});


const maleKeywords = ["雄","強","嫌","志"];
const femaleKeywords = ["芸","芬","佩"];


let go = () =>{
//alert("hi")

//array method : some (true , false )
//string method : includes
  var inputText = $("#userInput").val();
  const isMale = maleKeywords.some(thisElement =>inputText.includes(thisElement)); //function
  const isFemale = femaleKeywords.some(thisElement =>inputText.includes(thisElement)); //function
  if(isMale && isFemale){
    $("h1").text("🤷‍♂️🤷‍♀️");
  }else if(isMale) {
    $("h1").text("🙍🏻‍♂️");
  }else if(isFemale){
    $("h1").text("👱🏻‍♀️");
  }else{
    $("h1").text("😎");
  }
};
