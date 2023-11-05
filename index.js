const loader =document.querySelector("#loader")
const container = document.querySelector("#container")
function loadPage(){
window.addEventListener("load",function(){
  container.style.display = "block"
  loader.style.display = "none"
console.log("se cargo la pagina")



})
}
loadPage()



const Light_btn = document.querySelector("#light-button");
const body = document.querySelector("body");
const sound_btn = document.querySelector("#sound-button")



function lightPage(){
let DarkMode = false; 

Light_btn.addEventListener("click", () => {
  DarkMode = !DarkMode;

  if (DarkMode == true) {
    body.style.background = " linear-gradient(to bottom, #1a1a1a, #000000)"; // Establece el fondo en modo oscuro
    Light_btn.style.color="white"
    sound_btn.style.color = "white"
  } else {
    body.style.background = ""; 
    Light_btn.style.color = ""
    sound_btn.style.color = ""
  }
});
}
lightPage();
const audio = new Audio("./img/Psychedelic Game.mp3")
function soundPage(){
 let active = false
    sound_btn.addEventListener("click",()=>{
        active = !active
        
        if(active== true){
            audio.play();
        }
        else{
           audio.pause(); 
        }



    })
}
soundPage();