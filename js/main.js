const suma = (a,b) => a + b; 
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;

const barraResultado = document.getElementById('barra');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cero = document.getElementById('cero');
const c = document.getElementById('c');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const igual = document.getElementById('igusl');
const punto = document.getElementById('punto');

siete.onclick = () => {
    barraResultado = siete.innerHTML;
};

console.log(siete.innerHTML);