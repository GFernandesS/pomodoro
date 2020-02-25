var contagem = document.getElementsByTagName("p")[0];
var btnIniciar = document.querySelector("input.btnIniciar");
var btnTerminar = document.querySelector("input.btnTerminar");
var btnPausar = document.querySelector("input.btnPausar");
var btnInteiro = document.querySelector("div.inteiroP");
var btnMeio = document.querySelector("div.meioP");
var btnVeloz = document.querySelector("div.velozP")
var timer = null;
var selecao = {
    btnInteiro: true,
    btnMeio: false,
    btnVeloz:false
}





const POMODORO = "25:00"; //Constantes que definem o tempo dos Pomodoros
const MEIOPOMODORO = "10:00"
const POMODOROVELOZ = "05:00"


iniciarBotoes();

btnIniciar.addEventListener("click", function (){
    if(typeof timer != "undefined"){
        clearInterval(timer);
    }
    selecaoVelocidade();
    timer = setInterval(iniciarContagem, 1000);//Definindo a função a uma variável, caracteriza como sendo de primeira classe
});

btnTerminar.addEventListener("click", function(){
    if(window.confirm("Tem certeza que deseja terminar o Pomodoro?")){
    selecaoVelocidade();
    if(typeof timer != "null"){
        btnIniciar.disabled = false;
        btnIniciar.style.backgroundColor = "#a10b0b"
        btnIniciar.style.cursor = "pointer";
        btnPausar.value = "Pausar Pomodoro";
        clearInterval(timer);
        iniciarBotoes();
    }
}
})


btnPausar.addEventListener("click", function(){
    return pausarContagem();
})

btnInteiro.addEventListener("click", function(){
    if(!btnIniciar.disabled){
    contagem.innerText = POMODORO;
    selecao.btnInteiro = true;
    selecao.btnMeio = false;
    selecao.btnVeloz = false;
    btnInteiro.style.backgroundColor = "#d6cece";
    btnMeio.style.backgroundColor = "#a10b0b"
    btnVeloz.style.backgroundColor = "#a10b0b";
    }
    else{
        window.alert("Termine o Pomodoro atual para alterar o seu tipo");
    }
})

btnMeio.addEventListener("click", function(){
    if(!btnIniciar.disabled){
    contagem.innerText = MEIOPOMODORO;
    selecao.btnInteiro = false;
    selecao.btnMeio = true;
    selecao.btnVeloz = false;
    btnInteiro.style.backgroundColor = "#a10b0b";
    btnMeio.style.backgroundColor = "#d6cece";
    btnVeloz.style.backgroundColor = "#a10b0b";
    }
    else{
        window.alert("Termine o Pomodoro atual para alterar o seu tipo");
    }
})

btnVeloz.addEventListener("click", function(){
    if(!btnIniciar.disabled){
    contagem.innerText = POMODOROVELOZ;
    selecao.btnInteiro = false;
    selecao.btnMeio = false;
    selecao.btnVeloz = true;
    btnInteiro.style.backgroundColor = "#a10b0b";
    btnMeio.style.backgroundColor = "#a10b0b";
    btnVeloz.style.backgroundColor = "#d6cece";
    }
    else{
        window.alert("Termine o Pomodoro atual para alterar o seu tipo");
    }
})



function iniciarContagem(){
    let min = Number(contagem.innerText.substr(0, 2));
    let sec = Number(contagem.innerText.substr(3, 2));
    
    if(min != 0 || sec != 0){
        btnIniciar.disabled = true;
        btnIniciar.style.backgroundColor = "#d6cece"
        btnIniciar.style.cursor = "default";
        btnPausar.disabled = false;
        btnPausar.style.backgroundColor = "#a10b0b"
        btnPausar.style.cursor = "pointer";
        btnTerminar.disabled = false;
        btnTerminar.style.backgroundColor = "#a10b0b"
        btnTerminar.style.cursor = "pointer";
        
        if(sec == 0){
            sec = 59;
            sec--;
            min -= 1;
        }
        else{
            sec--;
        }
    }
    else{
       tocarSom();
       btnIniciar.disabled = false;
       btnIniciar.style.backgroundColor = "#a10b0b"
       btnIniciar.style.cursor = "pointer";
       clearInterval(timer);
    }
    contagem.innerText = `${min < 10? "0" + min: min}:${sec < 10? "0" + sec: sec}`
    
}

function tocarSom(){
    let audio = document.getElementsByTagName("audio")[0];
    return audio.play();
}


function pausarContagem(){
    if(btnPausar.value == "Pausar Pomodoro"){
        clearInterval(timer);
        btnPausar.value = "Continuar Pomodoro"
    }
    else{
        btnPausar.value = "Pausar Pomodoro"
        timer = setInterval(iniciarContagem, 1000);//Definindo a função a uma variável, caracteriza como sendo de primeira classe
    }
}

function iniciarBotoes(){
    
    btnPausar.disabled = true;
    btnPausar.style.backgroundColor = "#d6cece"
    btnPausar.style.cursor = "default";
    btnInteiro.style.backgroundColor = "#d6cece";
    btnInteiro.style.cursor = "pointer";
    btnMeio.style.cursor = "pointer";
    btnVeloz.style.cursor = "pointer";
    btnTerminar.disabled = true;
    btnTerminar.style.backgroundColor = "#d6cece"
    btnTerminar.style.cursor = "default";
    }

function selecaoVelocidade(){
    if(selecao.btnInteiro){
        contagem.innerText = POMODORO
    }
    else{
        if(selecao.btnMeio){
            contagem.innerText = MEIOPOMODORO;
        }
        else{
            contagem.innerText = POMODOROVELOZ;
        }
    }
}