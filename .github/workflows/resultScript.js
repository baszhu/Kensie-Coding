

function submit(code) {
  console.log("submitted!")
  
  let message = "";
  let video = "";
  let header = "";
  // x6 for all the other endangered animals 
  if (code == 'INFJ') {
    header = "Your Personality Type: The Architect";
       message = "Imaginative and strategic thinkers, with a plan for everything.";
    video = "";
    //sea lion
  }
  else if (code == 'INTP') {
    header = "Your Personality Type: The Logician";
      
    message = "Innovative inventors with an unquenchable thirst for knowledge.";
    //octopus
    video = "";
  }
  else if (code == 'ENTJ') {
    header = "Your Personality Type: The Commander";
    message = "Bold, imaginative and strong-willed leaders, always finding a way - or making one.";
    video = "";
    //garibaldi
  }
  else if (code == 'ENTP') {
    header = "Your Personality Type: The Debater";
     
    message = "Smart and curious thinkers who cannot resist an intellectual challenge.";
    //dolphin 
    
    video = "";
  }
  else if (code == 'INFJ') {
    header = "Your Personality Type: The Advocate";
      
    message = "Quiet and mystical,yet very inspiring and tireless idealists.";
    video = "";
    //beluga whale
    else if (code == 'INFP') {
    header = "Your Personality Type: The Mediator";
    message = "Poetic, kind, altruistic,people,always eager to help a good cause."
    }

    video = "";
  }
  else if (code == 'ENFJ') {
    header = "Your Personality Type: The Protagonist";
    message = "Charismatic and inspiring leaders, able to mesmerize their listeners.";
    video = "";
  }
else if (code == 'ENFP') {
  header = "Your Personality Type: The Campaigner";
  message = "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.";
  video = "";
  else if (code == 'ISTJ') {
    header = "Your Personality Type: The Logistician";
    message ="Practical and fact-minded individuals, whose reliability cannot be doubted.";
    video = "";
  else if (code == 'ISFJ') {
    header = "Your Personality Type: The Defender";
    message = "Very dedicated and warm protectors, always ready to defend their loved ones.";
  video = ""
  else if (code == 'ESTJ') {
    header = "Your Personality Type: The Excutive";
    message = "Excellent administrators, unsurpassed at manging things - or people.";
    video = "";
  else if (code == 'ESFJ') {
    header = "Your Personality Type: The Consul";
    message = "Extraordinarily caring, social and popular people, always eager to help.";
    video = "";
  else if (code == 'ISTP') {
    header = "Your Personality Type: The Virtuoso";
    message = "Bold and practical experimenters, masters of all kinds of tools.";
    video = "";
  else if (code == 'ISFP') {
    header = "Your Personality Type: The Adventurer";
    message = "Flexible and charming artists, always ready to explore and experience something new.";
    video = "";
  else if (code == 'ESTP') {
    header = "Your Personality Type: The Entrepreneur";
    message = "Smart, energetic and very perceptive people, who truly enjoy living on the edge.";
    video = "";
  else if (code == 'ESFP') {
    header = "Your Personality Type: The Entertainer";
    message = "Spontaneous, energetic and enthusiastic people - life is never boring around them.";
    video = "";
  document.getElementById("intro").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("context").textContent = message;
  document.getElementById("theCoolestHeader").textContent = header;
  document.getElementById("video").src = video; 
  
} 
function getUrlParameter(param){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function check_for_parameter(){
  let url_code = getUrlParameter('code');
  if (url_code){
    submit(url_code.toUpperCase());
  }
}

function process_input() {
  console.log("Button clicked!"); // This helps you debug
  let inputField = document.getElementById("code");

  if (inputField) {
    let code = inputField.value.toUpperCase();
    submit(code);
  } else {
    console.error("Could not find the input field with id='code'");
  }
}

// Safer way to trigger the load
window.addEventListener('load', check_for_parameter);
