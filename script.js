// initializing variables

let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let mainPlay = document.getElementById('mainPlay');
let ProgressBar = document.getElementById('ProgressBar');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let mainSongName = document.getElementById('mainSongName');
let miniPlay = document.getElementsByClassName('miniPlay');

let songs =[
    {songName:"Just You And I" ,filePath:"songs/1.mp3",coverPath:"covers/cover1.png"},
    {songName:"Happier" ,filePath:"songs/2.mp3",coverPath:"covers/cover2.png"},
    {songName:"Dandelions " ,filePath:"songs/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Butter" ,filePath:"songs/4.mp3",coverPath:"covers/cover4.png"},
    {songName:"Levitating" ,filePath:"songs/5.mp3",coverPath:"covers/cover5.jpg"},
    {songName:"Heat Waves" ,filePath:"songs/6.mp3",coverPath:"covers/cover6.png"}
]

//handling main  button
mainPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
audioElement.play();
mainPlay.classList.remove('fa-play-circle');
mainPlay.classList.add('fa-pause-circle');

  }
  else{
    audioElement.pause();
    mainPlay.classList.remove('fa-pause-circle');
    mainPlay.classList.add('fa-play-circle');
    
  }
})

//  events
audioElement.addEventListener('timeupdate',()=>{

  // update seek baar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
ProgressBar.value = progress;
})

ProgressBar.addEventListener('change',() =>{
    audioElement.currentTime =(ProgressBar.value * audioElement.duration)/100;
})

songItems.forEach((element,i)=>{
  console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

const makeAllPlays =()=>{
  Array.from(document.getElementsByClassName('miniPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
   element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('miniPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{

    console.log(e.target); 

    makeAllPlays();
     songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mainSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
   })
}
)

//previous button
document.getElementById('previous').addEventListener('click',()=>{
 if(songIndex<=0){
  songIndex=0
 }
 else{
  songIndex-=1 ;
}
audioElement.src=`songs/${songIndex+1}.mp3`;
mainSongName.innerText =songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
mainPlay.classList.remove('fa-play-circle');
mainPlay.classList.add('fa-pause-circle');
})

//next button
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=5){
   songIndex=0
  }
  else{
   songIndex += 1 ;
 }
 audioElement.src=`songs/${songIndex+1}.mp3`;
 mainSongName.innerText =songs[songIndex].songName;
 audioElement.currentTime=0;
 audioElement.play();
 mainPlay.classList.remove('fa-play-circle');
 mainPlay.classList.add('fa-pause-circle');
 })
 


