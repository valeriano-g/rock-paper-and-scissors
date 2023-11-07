"extrict-mode"
const loader =document.querySelector("#loader")
const container = document.querySelector("#container")
function loadPage(){
window.addEventListener("load",function(){
  container.style.display = "block"
  loader.style.display = "none"
console.log("se cargo la pagina")
//audio.play();


})
}
loadPage()



const Light_btn = document.querySelector("#light-button");
const body = document.querySelector("body");
const sound_btn = document.querySelector("#sound-button")


// modo oscuro
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
////


const audio = new Audio("./img/Psychedelic Game.mp3")
// musica de fondo boton

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



///
const formGame = document.querySelector("#form-sec1")
const nickname = document.querySelector("#nickname")
const gender = document.querySelector("#dropdown")
const btn_play = document.querySelector("#play-btn1")
const player = document.querySelector("#user-nick")
const handsColor = document.querySelectorAll("#hand-colors")
const user_img = document.querySelector("#user-color")

function sendData(){
  formGame.addEventListener("submit",function(event){
event.preventDefault();
//toma los datos del form y se los envia ala sec-2 donde esta el juego
let name = nickname.value
let type = gender.value 
player.textContent = name

//accedemos al color que el usuario a selecionado
//iterando dentro de la lista 
handsColor.forEach(hand_color => {
    if(hand_color.checked){

      var SelectColor = hand_color.value
      console.log([name,type,SelectColor])
      //aqui hacemos el cambio de color del jugador dependiendo lo que el usuario escoja
      switch (type) {
        case "men":
            switch (SelectColor) {
                case "white":
                    user_img.src = "./img/user-white.svg";
                    break;
                case "indian":
                    user_img.src = "./img/user-indian.svg";
                    break;
                case "black":
                    user_img.src = "./img/user-black.svg";
                    break;
                default:
                    // Acción por defecto si SelectColor no coincide con ningún caso
                    alert("no se ha selecionado color")
                    break;
            }
            break;
    
        case "women":
            switch (SelectColor) {
                case "white":
                    user_img.src = "./img/woman-user-white.svg";
                    break;
                case "indian":
                    user_img.src = "./img/woman-user-indian.svg";
                    break;
                case "black":
                    user_img.src = "./img/woman-user-black.svg";
                    break;
                default:
                  
                    break;
            }
            break;
    
        default:
           
            break;
    }
  
}
else{

}
   //cambiamos los tipos de manos de piedra papel  o tijeras dependiendo la seleccion del usurio
const rockAttack = document.querySelector("#rock-attack");
const sccisorsAttack = document.querySelector("#sccisors-attack");
const paperAttack = document.querySelector("#paper-attack")
 
if(SelectColor == "white"){
rockAttack.src ="./img/rock-white.svg";
sccisorsAttack.src ="./img/scissors-white.svg";
paperAttack.src ="./img/paper-white.svg";

}
else if (SelectColor == "indian"){
rockAttack.src = "./img/indian-rock.svg"
sccisorsAttack.src ="./img/indian-scissors.svg"
paperAttack.src="./img/indian-paper.svg"

}
else if (SelectColor =="black"){
  rockAttack.src = "./img/black-rock.svg"
sccisorsAttack.src ="./img/black-scissors.svg"
paperAttack.src="./img/black-paper.svg"
}


});












  })



}

sendData();

const btnsAttack = document.querySelectorAll(".btn-hands-type");
const UserAttack = document.querySelector("#user-attack");
const CpuAttack = document.querySelector("#cpu-attack");

function game() {
  let player = nickname.value

    //se vuelve iterar en las manos del sec-1 para sacar la informacion
    handsColor.forEach((HandAttackColor) => {
      if (HandAttackColor.checked) {
        let HandAttack = HandAttackColor.value;


        

      }
    });
  // Itera sobre los botones de selección de mano
  btnsAttack.forEach((btnAttack) => {
    // se hace el evento escucha para saber cual fue la eleccion del usuario
    btnAttack.addEventListener("click", () => {
      let selectHand = btnAttack.getAttribute("value");

      if (selectHand === "rock") {
        console.log(` el blanco es cojio piedra`);

       
      } else if (selectHand === "scissors") {
        console.log(` escojio tijeras`);
      } else if (selectHand === "paper") {
        console.log(`escojio papel`);
      }
    });
  });
}

game();
