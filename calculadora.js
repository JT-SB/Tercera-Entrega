//NIVEL I 
//FUNCION PARA REALIZAR UNA SUMA
function Sumar(operandoSuma1, operandoSuma2) {// NIVEL I (CREAR LA FUNCION)
    return operandoSuma1 + operandoSuma2;
}

// console.log(Sumar (2,2)); //INVOCAR LA FUNCION DE SUMA


//FUNCION PARA REALIZAR UNA RESTA
function Resta(operandoResta1, operandoResta2) { // NIVEL I (CREAR LA FUNCION)
    return operandoResta1 - operandoResta2;
}

// console.log(Resta (5,2)); //INVOCAR LA FUNCION DE RESTA


//FUNCION PARA REALIZAR UNA MULTIPLICACION
function Multiplicar(operandoMultiplicacion1, operandoMultiplicacion2) { // NIVEL I (CREAR LA FUNCION)
    return operandoMultiplicacion1 * operandoMultiplicacion2;
}

// console.log(Multiplicar (5,5)); //INVOCAR LA FUNCION DE MULTIPLICAR


//FUNCION PARA REALIZAR UNA DIVISION
function Dividir(operandoDivision1, operandoDivision2) { // NIVEL I (CREAR LA FUNCION)
    return operandoDivision1 / operandoDivision2;
}

// console.log(Dividir (4,2)); //INVOCAR LA FUNCION DE DIVIDIR


//NIVEL II 

//FUNCIONES MATEMATICAS MOSTANDO EL DATO EN PANTALLA Y EN CONSOLA//
function SumarNumeros() {
    let valor1 = parseInt(prompt("ingrese el primer numero a sumar:")); //IMPLEMENTACION DEL PROMPT()
    let valor2 = parseInt(prompt("ingrese el segundo numero a sumar:"));
    let suma = valor1 + valor2;
    document.write(`El resultado de la suma es: ${suma} <br>`);
    console.log("El resultado de la suma es:" + " " + suma);
}

function RestarNumeros() {
    let valor1 = parseInt(prompt("ingrese el primer numero a restar:"));//IMPLEMENTACION DEL PROMPT()
    let valor2 = parseInt(prompt("ingrese el segundo numero a restar:"));
    let resta = valor1 - valor2;
    document.write(`El resultado de la resta es: ${resta} <br>`);
    console.log("El resultado de la resta es:" + " " + resta);
}

function MultiplicarNumeros() {
    let valor1 = parseInt(prompt("ingrese el primer numero a multiplicar:"));//IMPLEMENTACION DEL PROMPT()
    let valor2 = parseInt(prompt("ingrese el segundo numero a multiplicar:"));
    let multiplicacion = valor1 * valor2;
    document.write(`El resultado de la multiplicacion es: ${multiplicacion} <br>`);
    console.log("El resultado de la multiplicacion es:" + " " + multiplicacion);
}

function DividirNumeros() {
    let valor1 = parseInt(prompt("ingrese el primer numero a dividir:"));//IMPLEMENTACION DEL PROMPT()
    let valor2 = parseInt(prompt("ingrese el segundo numero a dividir:"));
    let division = valor1 / valor2;
    document.write(`El resultado de la division es: ${division} <br>`);
    console.log("El resultado de la division es:" + " " + division);
}
    
// INVOCAR FUNCIONES CON EL DATO INGRESADO EN PANTALLA
// SumarNumeros();
// RestarNumeros();
// MultiplicarNumeros();
// DividirNumeros();


//NIVEL III

function cuadradoDeUnNumero() {
    let numero1 = parseInt(prompt("Ingrese el numero a calcular el cuadrado:"));
    let valor2 = numero1;
    let resultado = Multiplicar(numero1, valor2); //----------------------------------------INPLEMENTACION DE LA FUNCION MULTIPLICAR
    document.write(`El cuadrado de ${numero1} es: ${resultado}<br>`);
    console.log(`El cuadrado de ${numero1} es: ${resultado}`);
}
//INVOCAR FUNCION
// cuadradoDeUnNumero();

function promedioDeTresNumeros() {
    let numero1 = parseInt(prompt("Ingrese primer numero:"));
    let numero2 = parseInt(prompt("Ingrese segundo numero:"));
    let numero3 = parseInt(prompt("Ingrese tercer numero numero:"));
    let sumaPromedio = numero1 + numero2 + numero3;
    let resultado = Dividir(sumaPromedio, 3);//-----------------------------------------------INPLEMENTACION DE LA FUNCION DIVIDIR
    document.write(`El promedio entre ${numero1} ${numero2} ${numero3} es: ${resultado} <br>`);
    console.log(`El promedio entre ${numero1} ${numero2} ${numero3} es: ${resultado}`);

}
//INVOCAR FUNCION
// promedioDeTresNumeros();

function calcularPorcentaje() {
    let numeroTotal = prompt("Ingrese numero total:");
    let porcentaje = prompt("Ingrese porcentaje:");
    let por = Multiplicar(numeroTotal, porcentaje);//--------------------------------------INPLEMENTACION DE LA FUNCION MULTIPLICAR
    let DivPor = Dividir(por, 100);//------------------------------------------------------INPLEMENTACION DE LA FUNCION DIVIDIR
    document.write(`El ${porcentaje} porciento de ${numeroTotal} es: ${DivPor} <br>`);
    console.log(`El ${porcentaje} porciento de ${numeroTotal} es: ${DivPor}`);
}
//INVOCAR FUNCION
// calcularPorcentaje();

function GeneradorDePorcentaje(valor1, valor2) {
    let multipor = valor1 * valor2;
    let porcentaje = (multipor / 100);
    document.write(`${porcentaje}<br>`);
    return (porcentaje);
}
//INVOCAR FUNCION
// GeneradorDePorcentaje(2,200);


//NIVEL IV

function verificarParidad(){
    let numero = parseInt(prompt("Ingrese un numero:"));
    if(numero % 2 === 0){
        document.write(`El numero ingresado ${numero} es: Par <br>`);
        console.log(`El numero ingresado ${numero} es: Par`);
    }else{
        document.write(`El numero ingresado ${numero} es: Impar <br>`);
        console.log(`El numero ingresado ${numero} es: Impar`);
    }
}
//INVOCAR FUNCION
// verificarParidad();




// let suma=0;
// let numero1 = parseInt(prompt("Ingrese primer numero:"));
// let numero2 = parseInt(prompt("Ingrese segundo numero:"));
//  for(let f=1; f0=numero2; f++){
//     suma=suma+numero2;
//     console.log(f);
// }
// document.write("La suma de los numeros es:" + sumaa);