import React from 'react';

function Products(){
    // Fetch PRODUCTS
    const [products,setProducts] = useState(["Cargando.."])
    const [productsStock,setStock] = useState(["Cargando.."])
    async function fetchProducts() {       
        const response = await fetch('http://localhost:3001/api/product/list');        
        const productsArray = await response.json()
        setProducts(productsArray.info.total)
        setStock(productsArray.data)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
}

export default Products;