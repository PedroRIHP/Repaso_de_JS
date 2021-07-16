
let a =parseInt(prompt("ingrese un Numero"));
let b = parseInt(prompt("ingrese otro Numero"));

/* if(!isNaN(num1) || !isNaN(num2)) && !isNaN(num1) && !isNaN(num2)) {
    if(num1==num2){
        document.write(`<h2>los numeros son iguales<h2>`);
    }
    else if (num1 > num2){
        document.write(`<h2> el numero ${num1} es mayor que el numero`)
    }
    else{
        document.whrite(`<h2>el numero ${num1} es mayor que el numero`)
    }
    else{
        document.write(`<h2> solo escribe numeros: p</h2>`)
    }
} */

if(a == b) {
    document.write(`el ${a} es igual a ${b}`);
    
}else if (a>b) {
    document.write(`el ${a} es mayor que ${b}`);
}else{
    document.write(`el ${a} es menor que ${b}`);
}

