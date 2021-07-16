// Funciones
const suma = (a,b) => a + b; 
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;
const limpiar = () => barraResultado.textContent = "0";
const resetear = () => {
    barraResultado.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
};
const resolver = () => {
    let resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            resultado = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            resultado = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            resultado = parseFloat(a) / parseFloat(b);
            break;
    };
    resetear();
    barraResultado.textContent = resultado;
};

// Botones
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
const igual = document.getElementById('igual');
const punto = document.getElementById('punto');

// Funcionamiento de los botones
uno.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "1";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "1";
    }
};

dos.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "2";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "2";
    }
};

tres.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "3";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "3";
    }
};

cuatro.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "4";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "4";
    }
};

cinco.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "5";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "5";
    }
};

seis.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "6";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "6";
    }
};

siete.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "7";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "7";
    }
};

ocho.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "8";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "8";
    }
};

nueve.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "9";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "9";
    }
};

cero.onclick = () => {
    if (barraResultado.textContent[0] === "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = "0";
    } else if (barraResultado.textContent[0] !== "0" && barraResultado.textContent.length <= 15) {
        barraResultado.textContent = barraResultado.textContent + "0";
    }
};

punto.onclick = () => {
    if (barraResultado.textContent.includes(".")) {
        
    }
    else if (barraResultado.textContent === "0") {
        barraResultado.textContent = "."
    } else {
        barraResultado.textContent = barraResultado.textContent + ".";
    }
};

sumar.onclick = () => {
    a = barraResultado.textContent;
    operacion = "+" 
    limpiar();
};

resta.onclick = () => {
    a = barraResultado.textContent;
    operacion = "-" 
    limpiar();
};

multiplicacion.onclick = () => {
    a = barraResultado.textContent;
    operacion = "*" 
    limpiar();
};

division.onclick = () => {
    a = barraResultado.textContent;
    operacion = "/" 
    limpiar();
};

igual.onclick = () => {
    b = barraResultado.textContent;
    resolver();
};

c.onclick = () => {
    resetear();
};