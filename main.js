const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");
//entendre le click sur le boutton watch movie pour remove la class active  
//tailer-container
btnEl.addEventListener("click" , () =>{
trailerContainerEl.classList.remove("active");
});
//entendre le click sur le boutton watch movie pour remove la class active setup pour hide 
//tailer-container
closeIconEl.addEventListener("click" , () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
});