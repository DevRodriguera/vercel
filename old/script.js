// document.querySelector("#header-hello").textContent = "Olá, bom dia.";
const now = new Date();

let showHello = document.querySelector("#header-hello");

if(now.getHours() < 12) {
    showHello.innerHTML = '<p id="hh-content">Bom dia -</p>';
}else if(now.getHours() < 18) {   
    showHello.innerHTML = '<p id="hh-content">Boa tarde -</p>';
}else {
    showHello.innerHTML = '<p id="hh-content">Boa noite -</p>';
}

const zeroFill = (n) => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();
    const hour = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    document.getElementById('real-time').innerHTML = '<span id="rt-content">'+hour+'</span>';
}, 1000);


const toggle = document.querySelector("#toggle-btn");

toggle.addEventListener("change", function() {
    document.body.classList.toggle("light");
});