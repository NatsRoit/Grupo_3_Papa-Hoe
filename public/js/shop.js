window.addEventListener('load', function() {
    console.log ('acá estoy') // Prueba para ver si conecta

    let nombre = document.querySelector('#name');
    let stock = document.querySelector('#stock');
    let precio = document.querySelector('#price');
    let descuento = document.querySelector('#discount');
    
    
        
    fetch ('api/products/list')
        .then(response => response.json())
        .then(informacion => {
            console.log(informacion.data)
    
            for (let i=0; i < informacion.data.length; i++) {
    
                let productName = '<p>' + informacion.data[i].name + '</p>'
                let productStock = '<p>' + informacion.data[i].stock + '</p>'
                let productPrice = '<p>' + informacion.data[i].price + '</p>'
                let productDiscount = '<p>' + informacion.data[i].discount + '</p>'
    
                nombre.innerHTML += productName
                stock.innerHTML += productStock
                precio.innerHTML += productPrice
                descuento.innerHTML += productDiscount
    
    
            }
    
            
        })
    }
    
    
    ) // cierre de validaciones
    