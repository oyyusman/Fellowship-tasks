// toggler style switcher
const stylswitcher=document.querySelector('.style-switcher-toggler');
stylswitcher.addEventListener("click",()=>{
  document.querySelector('.style-switcher').classList.toggle("open");
})
// hide style switcher onscroll
window.addEventListener("scroll",()=>{
  if(  document.querySelector('.style-switcher').classList.contains("open")){
    document.querySelector('.style-switcher').classList.remove("open");

  }
})
// theme colors
const alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
  alternatestyle.forEach((style)=>{
    if(color === style.getAttribute("title")){
      style.removeAttribute("disabled");
    }
    else{
      style.setAttribute("disabled","true");
    }
  })
}
// theme light and darki
const dayNight=document.querySelector('.day-night')
dayNight.addEventListener("click",()=>{
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark")){
    dayNight.querySelector('i').classList.add("fa-sun")

  }
  else{
    dayNight.querySelector('i').classList.add("fa-moon")

  }
})