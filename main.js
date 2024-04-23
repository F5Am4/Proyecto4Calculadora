/*INSTRUCCIONES PARA EL PROYECTO
-CADA BOTON SE ASOCIA A UNA FUNCIÓN
-FUNCIÓN SEPARADA PARA MOSTRAR RESULTADO
 - RECIBE EL RESULTADO POR PARÁMETRO
 - MUESTRA EL RESULTADO EN EL INPUT
-CADA FUNCIÓN DE OPERACIÓN LLAMA A ESA FUNCIÓN
-COMIENZA POR LA ESTRUCTURA HTML
-AGREGA ESTILOS CSS 

*CARACTERÍSTICAS DE LA CALCULADORA:
- DEBE TENER 2 VISORES (MOSTRARA NUMEROS MINIMOS Y MAXIMOS PARA HACER OPERACIONES ENTRE SÍ)
- DEBE PODER EJECUTAR OPERACIONES BÁSICAS(+, -, *, /)
- DEBE CONTAR CON OPERACIÓN POTENCIA
- DEBE CONTAR CON RAÍZ CUADRADA
- DEBE CONTAR CON NÚMERO ABSOLOTU (SOLO SE DEBE PODER VER EN EL SEGUNDO CAMPO VISOR YA QUE SOLO SE EJECUTA UN NÚMERO EN LA OPERACIÓN)
- DEBE CONTAR CON 'RANDOM' Y EJECUTAR UN NÚMERO MÍNIMO EN EL PRIMER VISOR Y MÁXIMO EN EL SEGUNDO

EN LA ZONA INFERIOR DE LA CALCULADORA DEBERÁ CONTAR CON:
- BEDE CONTAR CON UN BOTON DE REDONDEO(PARA LA VENTANA DE RESULTADO)
- DEBE CONTAR CON BOTON FLOOR (TOMARÁN EL VALOR DEL CAMPO RESULTADO CONVIRTIENDOLO EN LO QUE INDICA EL BOTON)
- DEBE CONTAR CON BOTON CEIL (TOMARÁN EL VALIOR DEL CAMPO RESULTADO CONVIRTIENDOLO EN LO QUE INDICA EL BOTON)
*/

//FUNCIÓN QUE MUESTRA RESULTADOS
function mostrarResultado(resultado){
    document.getElementById('resultados').value = resultado
}

//FUNCIONES DE OPERADORES BÁSICOS
function suma(){
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value

    mostrarResultado(minimo + maximo)
}

function resta(){
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value

    mostrarResultado(minimo - maximo)
}

function multiplicacion(){
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value

    mostrarResultado(minimo * maximo)
}

function division(){
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value

    mostrarResultado(minimo / maximo)
   }

//FUNCIONES DE OPERADORES CON MÉTODO

function raizCuadrada(){
    let numero = +document.getElementById('numero2').value
    mostrarResultado(Math.sqrt(numero))
}

function potenciar() {
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value
    mostrarResultado(Math.pow(minimo, maximo))
}

function valorAbsoluto(){
    let numero = +document.getElementById('numero2').value
    mostrarResultado(Math.abs(numero))
}

function aleatorio(){
    let minimo = +document.getElementById('numero1').value
    let maximo = +document.getElementById('numero2').value
    maximo++
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo))
}

//FUNCIONES PARA REDONDEAR RESULTADOS

function redondear(){
    let resultado = +document.getElementById('resultados').value
    mostrarResultado(Math.round(resultado))
}

function valorInferior(){
    let resultado = +document.getElementById('resultados').value
    mostrarResultado(Math.floor(resultado))
}

function valorSuperior(){
    let resultado = +document.getElementById('resultados').value
    mostrarResultado(Math.ceil(resultado))
}


