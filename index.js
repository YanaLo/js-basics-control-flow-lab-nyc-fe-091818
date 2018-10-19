// Write your code in this file!
function scuberGreetingForFeet(numOfFeet){
  if(numOfFeet<=400){
    return 'This one is on me!'
  }else if(numOfFeet>2000 &&numOfFeet<2500){
    return 'I will gladly take your thirty bucks.'
  }else if(numOfFeet>2500){
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  if(city==="NYC"){
    return "Ok, sounds good."
  }else{
    return "No go."
  }
}
// return city==="NYC" ? "Ok, sounds good." : "No go."
function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
      case 'not so generous':
        return "Thank you."
        case "thanks for everything":
          return "Bye."
  }
}