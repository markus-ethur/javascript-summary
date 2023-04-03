import React, { useCallback, useEffect, useState } from 'react'
import useProduct from '../hooks/useProduct';

const url = 'https://dummyjson.com/products';


const FetchSample = () => {

  // const [products, setProducts] = useState([]);

  const { products, refetch } = useProduct();

  // const fetchProducts = useCallback(async () => {
  //   const req: any = await fetch(url);
  //   const res: any = await req.json();
  //   console.log(res.products)
  //   setProducts(res.products);
  // }, []);

  const saveProduct = useCallback(async () => {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'G29'
      })
    })

    console.log(await req.status);    

  }, []);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts])
  


  return (
    <div>
      <div>Product</div>
      <div>
        <h2>Products</h2>
      </div>
      <ul>
        {products && products.map((p: {
          id: number,
          title: string,
          description: string
        }) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <br />
            {p.description}
          </li>
        ))}
      </ul>
      <button onClick={saveProduct}>Save</button>
    </div>
  )
}

export default FetchSample