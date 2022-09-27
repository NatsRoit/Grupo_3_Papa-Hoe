if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

console.log("acá estoy"); // Prueba para ver si conecta

async function fetchProdShop() {
  const res = await fetch("http://localhost:3001/api/products/index", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const info = await res.json();
  return info.data;
}

async function ready() {
  const PRODUCTS = await fetchProdShop();
  listProducts(PRODUCTS)
  console.log(PRODUCTS);
}


function listProducts(PRODUCTS) {
    let container = document.getElementById("adminContainer");
    container.innerHTML = ``;   
    
    for (let i = 0; i < PRODUCTS.products.length; i++) {
        const prod = PRODUCTS.products[i]
        container.innerHTML += `
        <tr>
            <td id="name">${prod.name}</td>
            <td id="cat">${prod.categoria.name}</td>
            <td id="stock">${prod.stock}</td>
            <td id="price">${prod.price}</td>
            <td id="discount">${prod.discount != 0? prod.discount : "prueba"}</td>
            <td id="adm-view"><a href="/product/detail/${prod.id}"><i class="fa-regular fa-eye"></i></a></td>
            <td id="adm-edit"><a href="/admin/edit/${prod.id}"> <i class="fa-solid fa-pencil"></i></a></td>
            <td id="adm-delete"><a href="/admin/delete/${prod.id}"<i class="fa-solid fa-trash"></i></a></td>
        </tr>
        `;
    }
}
