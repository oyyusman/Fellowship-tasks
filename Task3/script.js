// typing animation
var typed=new Typed(".typing",{
  strings:["","Web Designer","web Developer","Graphic Designer" , "YouTuber"],
  typespeed:50,
  backspeed:30,
  loop:true

})
// aside
const nav =document.querySelector(".nav"),
navlist=nav.querySelectorAll("li")
totalNavlist=navlist.length;
allsection=document.querySelectorAll(".section"),
totalsection=allsection.length;
for(let i=0; i<totalNavlist;i++){
  // console.log(navlist[i])
  const a=navlist[i].querySelector("a");
  a.addEventListener("click",function(){
    removeBackSection()
    for(let j=0;j<totalNavlist;j++){
      if(navlist[j].querySelector("a").classList.contains("active")){
       addBackSection(j);
        // allsection[j].classList.add("back-section")
      }
      navlist[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth < 1200){
      asidesectiontogglerbtn();
    }
  })
}
function removeBackSection()
{
  for(let i=0;i<totalsection;i++){
    allsection[i].classList.remove("back-section")
  }
}
function addBackSection(num){
  allsection[num].classList.add("back-section")
}
function showSection(element){
  for(let i=0;i<totalsection;i++){
    allsection[i].classList.remove("active");
  }

 const target= element.getAttribute("href").split("#")[1];
 document.querySelector("#" +target).classList.add("active");
}
function updateNav(element)
{
  for(let i=0; i<totalNavlist;i++){
    navlist[i].querySelector("a").classList.remove("active");
    const target= element.getAttribute("href").split("#")[1];
    if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
    {
      navlist[i].querySelector("a").classList.add("active");

    }


  }
}
document.querySelector(".hire-me").addEventListener("click", function(){
  const sectionindex=this.getAttribute("data-section-index");
  console.log(sectionindex);
  showSection(this);
  // console.log(this)
  updateNav(this);
  removeBackSection();
  addBackSection(sectionindex);
})
const navtoggler=document.querySelector(".nav-toggler")
aside=document.querySelector(".aside")
navtoggler.addEventListener("click",()=>{
  asidesectiontogglerbtn();
})
function asidesectiontogglerbtn(){
  aside.classList.toggle("open");
  navtoggler.classList.toggle("open")
  for(let i=0;i<totalsection;i++){
    allsection[i].classList.toggle("open")
  }
}
