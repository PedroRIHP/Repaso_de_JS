const meses = ["enero", "febrero", "Marzo", "Abril","Mayo","Junio", "Julio", "Agosto","Septiembre","Octubre","noviembre","Dicicmebre"]

for (let i=0; i< 12; i++) {
    console.log(meses[i])
}

const multiplicar = (numero) => {
    for (let i=1; i <= 10; i++){
        document.write(`</h1>${numero} x ${i} = ${numero*i}</h1>`);
    }
        
}

multiplicar(4)