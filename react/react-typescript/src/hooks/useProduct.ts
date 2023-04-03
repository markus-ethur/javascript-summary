import React, { useCallback, useState, useEffect } from 'react'

const url = 'https://dummyjson.com/products';

const useProduct = () => {

  const [products, setProducts] = useState([]);  

  const fetchProducts = useCallback(async() => {
    const req = await fetch(url);
    const res = await req.json();
    setProducts(res.products);    
  }, []);

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // fetchProducts();

  return { products }

}


export default useProduct;

