console.log("welcome to upotify")
// initialze songs
let songIndex=0;
let audioEelement=new Audio('song/m1.mp3')
let masterplay=document.getElementById('masterplay')
let myprogressbar=document.getElementById('progress')
let gif=document.getElementById('gif')
let songItems=Array.from(   document.getElementsByClassName('songitem'))




let songs=[
  {songName:"salam e ishaq" , filePath:"song/m1.mp3", coverpath:"covers/song1.jpg"},
  {songName:"insane" , filePath:"song/m6.mp3", coverpath:"covers/m6.jpg"},
  {songName:"execuse" , filePath:"song/m3.mp3", coverpath:"covers/song1.jpg"},
  {songName:"brown monda" , filePath:"song/m5.mp3", coverpath:"covers/m5.jpg"},
  {songName:"Summer high" , filePath:"song/m4.mp3", coverpath:"covers/m4.jpg"},
  {songName:"295" , filePath:"song/m7.mp3", coverpath:"covers/m7.jpg"}, 
  {songName:"ki hal ha" , filePath:"song/m2.mp3", coverpath:"covers/song1.jpg"},
  {songName:"Sannjh" , filePath:"song/m8.mp3", coverpath:"covers/m8.jpg"},



]
songItems.forEach((element,i)=>{
  console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})
  

masterplay.addEventListener('click',()=>{
  if(audioEelement.paused || audioEelement.currentTime<=0){
     audioEelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
  }
  else{
    audioEelement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle')
    gif.style.opacity=0;

  }
})

// audioEelement.play();

// listen to events
audioEelement.addEventListener('timeupdate',()=>{
  console.log('timeupdate')
  progress=parseInt((audioEelement.currentTime/audioEelement.duration)*100);
  // console.log(progress)
  myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
  audioEelement.currentTime=myprogressbar.value * audioEelement.duration/100;
})
const makeAllplays=()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
  })
  
  

}
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    console.log(e.target)
    makeAllplays()
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    audioEelement.src=`song/${index}.mp3`
    audioEelement.currentTime=0
    audioEelement.play()
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')

  })
 })

