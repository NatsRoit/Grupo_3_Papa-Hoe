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
// CAPTURO LOS ELEMENTOS QUE VOY A UTLIZAR
let title = document.querySelector(".titulo-seccion-main")
let searchInput = document.getElementById("search-form-input");
let searchForm = document.getElementById("searchForm");
let lupaIcon = document.getElementById("lupa-icon")
let searchBox = document.querySelector("div.search-box")

const PRODUCTS = await fetchProducts();
console.log(PRODUCTS);

let urlObject = new URLSearchParams(location.search)
let keywordValue = urlObject.get("keyword")
let catValue = urlObject.get("cat")
//-------------------------------------------
console.log(location.search);
console.log(urlObject.has("keyword"));
console.log(keywordValue);
console.log(catValue);
//-------------------------------------------
    if (location.href.includes("product/all") && location.search == "") {
        displayProducts(PRODUCTS);
        title.innerHTML = "Todos los productos"
        console.log(PRODUCTS);
    } else if (urlObject.has('keyword')) {
        filterProducts(keywordValue, PRODUCTS)
    } else if (urlObject.has('cat')) {
        let prodsByCat = PRODUCTS.filter(prod => prod.categoria.name.replace(/\s/g,'').toLowerCase() == catValue || prod.subcategoria.name.replace(/\s/g,'').toLowerCase() == catValue)
        title.innerHTML = `${catValue}`
        displayProducts(prodsByCat);
        // let queryCat = cat.categoria.name
        // filterProducts(queryCat, PRODUCTS)
    } else {
    }


    lupaIcon.addEventListener("click", (e) => {
        console.log(e.target);
        // let searchForm = document.getElementById("searchForm");
        searchBox.classList.toggle("hidden")
    });
}

function displayProducts(array) {
  let container = document.getElementById("prodsContainer");
  container.innerHTML = ``;
  for (let i = 0; i < array.length; i++) {
    const prod = array[i];
    container.innerHTML += `
            <div class="producto-shop">
                <a href="/product/detail/${prod.id}">
                    <div class="imagen-producto">
                        <div class="complementos-img">
                            <img src="/img/${prod.image1}"
                            alt="${prod.name}">
                        </div>
                    </div>
                </a>
                <a class="shop-wraper-info" href="/product/detail/${prod.id}">
                    <div class="detalle-producto">
                        <h2>${prod.name}</h2>
                        <p>${prod.marca.name}</p>
                    </div>
                    <div class="info-producto">
                        <p class="precio">$ ${prod.price}</p>
                        <p class="descuento">${
                        prod.discount != 0
                            ? prod.discount + "% off"
                            : "<p></p>"
                        }</p>
                        <p class="compare"><i class="fa-solid fa-square-check"></i></p>
                    </div>
                </a>
            </div>
        `;
  }
}
// title = document.querySelector(".titulo-seccion-main")
//         title.innerHTML = `Resultados para: ${keyword}`



function filterProducts(query, PRODUCTS) {
    title = document.querySelector(".titulo-seccion-main")
    keyword = query.replace(/\s/g,'')
    if (keyword == "") {
        title.innerHTML = `Todos los productos`
        displayProducts(PRODUCTS);
    } else {
        let filtered = PRODUCTS.filter(
        (prod) =>
            prod.name.replace(/\s/g,'').toLowerCase().includes(keyword.toLowerCase()) ||
            prod.description.replace(/\s/g,'_').toLowerCase().includes(keyword.toLowerCase()) ||
            prod.marca.name.replace(/\s/g,'').toLowerCase().includes(keyword.toLowerCase()) ||
            prod.categoria.name.replace(/\s/g,'').toLowerCase().includes(keyword.toLowerCase()) ||
            prod.subcategoria.name.replace(/\s/g,'').toLowerCase().includes(keyword.toLowerCase())
        );
        if (filtered.length > 0) {
            title.innerHTML = `Resultados para: ${keyword}`
            displayProducts(filtered);
        } else {
            let container = document.getElementById("prodsContainer");
            container.innerHTML = ``;
            title.innerHTML = `No se encontraron resultados`
        }
    }
}
