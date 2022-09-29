if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
    
console.log("acá estoy"); // Prueba para ver si conecta
    
    
async function fetchProducts() {
    const res = await fetch("http://localhost:3001/api/products/index", {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    });
    const info = await res.json();
    return info.data.products;
}

async function ready() {

const PRODUCTS = await fetchProducts();
//console.log(PRODUCTS);

//Dimensiones / Talles
let selDim = document.querySelector('#opcDim')
//console.log (selDim)
let dimensiones = document.querySelector ('#dimensiones')
//console.log (dimensiones)

selDim.addEventListener ('change', function () {
let dimensionElegida = selDim.options[selDim.selectedIndex];
//console.log (dimensionElegida.text)

dimensiones.innerHTML = dimensionElegida.text
})

// Fins
let selFins = document.querySelector('#opcFin') 
//console.log (selFins)
let fins = document.querySelector ('#fins')
//console.log (fins)

selFins.addEventListener ('change', function () {
let finElegida = selFins.options[selFins.selectedIndex];
//console.log (finElegida.text)

fins.innerHTML = finElegida.text
})

//Colores
let selColor = document.querySelector('#opcCol') 
//console.log (selColor)
let color = document.querySelector ('#color')
//console.log (color)


selColor.addEventListener ('change', function () {
let colorElegido = selColor.options[selColor.selectedIndex];
//console.log (colorElegido.text)

color.innerHTML = colorElegido.text
})

//Acabado

let selAcabado = document.querySelector('#opcAcab') 
//console.log (selAcabado)
let acabado = document.querySelector ('#acabado')
//console.log (acabado)

selAcabado.addEventListener ('change', function () {
let acabadoElegido = selAcabado.options[selAcabado.selectedIndex];
//console.log (acabadoElegido.text)

acabado.innerHTML = acabadoElegido.text
})

// Cantidad
let contador = document.getElementById("contador");
console.log (contador)

let sumar = document.getElementById("mas");
console.log (sumar)
let restar = document.getElementById("menos");
console.log (restar)
let importe = document.getElementById("importe");
console.log (importe)


function calcular() {
    let pr = parseFloat(importe.innerHTML)
    console.log(pr)
    let cant = contador.value;
    console.log(cant)
    // var isValid = /^[1-9][0-9]*$/.test(value);

    // if (!isValid) {
    //   contador.value = prevValue;
    // } else {
    //   prevValue = value;
    // }

   return pr * cant
   console.log(total)
//    .toFixed(2);
  }


sumar.addEventListener("click", function() {
    contador.value = Number(contador.value) + 1;
    let totalQ = document.querySelector("#totalCantidad")
    totalQ.innerHTML =  contador.value;
    });

sumar.addEventListener("click", function() {
    contador.value = Number(contador.value) + 1;
    let totalPrint = document.querySelector("#totalPrecio")
    // console.log(calcular())
    totalPrint.innerHTML =  calcular();
    });

restar.addEventListener("click", function() {
    contador.value = Number(contador.value) - 1;
    let totalPrint = document.querySelector("#totalPrecio")
    totalPrint.innerHTML =  calcular();
    }); 

sumar.addEventListener("keyup", function() {
    contador.value = Number(contador.value) + 1;
    let totalPrint = document.querySelector("#totalPrecio")
    // console.log(calcular())
    totalPrint.innerHTML = calcular();
    });


};