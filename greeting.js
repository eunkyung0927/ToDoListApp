const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
    
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();//input에 입력후 엔터치면 사라짐 -> 엔터 쳐도 남아있도록 만들어줌 
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
      
function askForName(){
   form.classList.add(SHOWING_CN); 
   form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
 
function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}
function init(){
    loadName();
    
}
init();