const loader = document.querySelector("#loader");
const container = document.querySelector("#container");

function loadPage() {
  window.addEventListener("load", function () {
    container.style.display = "block";
    loader.style.display = "none";
    console.log("se cargo la pagina");
  });
}

loadPage();

const Light_btn = document.querySelector("#light-button");
const body = document.querySelector("body");
const sound_btn = document.querySelector("#sound-button");

let selectedHandColor = ""; // Variable global para almacenar el color de mano seleccionado

// Modo oscuro
function lightPage() {
  let DarkMode = false;

  Light_btn.addEventListener("click", () => {
    DarkMode = !DarkMode;

    if (DarkMode) {
      body.style.background = "linear-gradient(to bottom, #1a1a1a, #000000)";
      Light_btn.style.color = "white";
      sound_btn.style.color = "white";
    } else {
      body.style.background = "";
      Light_btn.style.color = "";
      sound_btn.style.color = "";
    }
  });
}

lightPage();

const audio = new Audio("./img/Psychedelic Game.mp3");

// Música de fondo
function soundPage() {
  let active = false;

  sound_btn.addEventListener("click", () => {
    active = !active;

    if (active) {
      audio.play();
    } else {
      audio.pause();
    }
  });
}

soundPage();

const formGame = document.querySelector("#form-sec1");
const nickname = document.querySelector("#nickname");
const gender = document.querySelector("#dropdown");
const btn_play = document.querySelector("#play-btn1");
const player = document.querySelector("#user-nick");
const handsColor = document.querySelectorAll("#hand-colors");
const user_img = document.querySelector("#user-color");

function sendData() {
  formGame.addEventListener("submit", function (event) {
    event.preventDefault();
    // Toma los datos del formulario y se los envía a la sec-2 donde está el juego
    let name = nickname.value;
    let type = gender.value;
    player.textContent = name;

    // Accede al color que el usuario ha seleccionado
    // Itera dentro de la lista de colores de manos
    handsColor.forEach((hand_color) => {
      if (hand_color.checked) {
        var SelectColor = hand_color.value;
        console.log([name, type, SelectColor]);
        // Hace el cambio de color del jugador dependiendo de lo que el usuario haya seleccionado
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
                alert("No se ha seleccionado color");
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
        selectedHandColor = SelectColor; // Almacena el color de la mano seleccionado globalmente
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
      }
    });
  });
}

sendData();

const btnsAttack = document.querySelectorAll(".btn-hands-type");
const UserAttack = document.querySelector("#user-attack");
const CpuAttack = document.querySelector("#cpu-attack");

function game() {
    btnsAttack.forEach((btnAttack) => {
      // Se hace el evento escucha para saber cuál fue la elección del usuario
      btnAttack.addEventListener("click", () => {
        let selectHand = btnAttack.getAttribute("value");

        
        if (selectedHandColor === "white" && selectHand ==="rock") {
          // Mostrar la imagen de la mano blanca
          UserAttack.src = "./img/rock-white.svg"; 


        } 
       else if (selectedHandColor === "white" && selectHand ==="scissors") {
          // Mostrar la imagen de la mano blanca
          UserAttack.src = "./img/scissors-white.svg";
        }
        else if (selectedHandColor === "white" && selectHand ==="paper") {
          // Mostrar la imagen de la mano blanca
          UserAttack.src = "./img/paper-white.svg";
        }
        
        
        else if (selectedHandColor === "indian" &&  selectHand ==="rock") {
          // Mostrar la imagen de la mano india
          UserAttack.src = "./img/indian-rock.svg";
        }
        else if (selectedHandColor === "indian" &&  selectHand ==="paper") {
          // Mostrar la imagen de la mano india
          UserAttack.src = "./img/indian-paper.svg";
        }
        else if (selectedHandColor === "indian" &&  selectHand ==="scissors") {
          // Mostrar la imagen de la mano india
          UserAttack.src = "./img/indian-scissors.svg";
        }

         else if (selectedHandColor === "black" && selectHand ==="rock") {
          // Mostrar la imagen de la mano negra
          UserAttack.src = "./img/black-rock.svg";
        }

        else if (selectedHandColor === "black" && selectHand ==="paper") {
          // Mostrar la imagen de la mano negra
          UserAttack.src = "./img/black-paper.svg";
        }
        else if (selectedHandColor === "black" && selectHand ==="scissors") {
          // Mostrar la imagen de la mano negra
          UserAttack.src = "./img/black-scissors.svg";
        }

        // Continúa el manejo del juego aquí
        console.log(`El usuario seleccionó: ${selectHand}`);
      });
    });
  
}

game();





