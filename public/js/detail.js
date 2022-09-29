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

let selAcabado = document.querySelector('#opcAcab') 
//console.log (selAcabado)
let acabado = document.querySelector ('#acabado')
//console.log (acabado)

selAcabado.addEventListener ('change', function () {
let acabadoElegido = selAcabado.options[selAcabado.selectedIndex];
//console.log (acabadoElegido.text)

acabado.innerHTML = acabadoElegido.text
})


/*fetch ('api/products/index')
.then (response => response.json())
.then (informacion => {
    console.log(informacion.data)
})
*/



}