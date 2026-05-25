import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://products-service:8002/products"
      );

      setProducts(response.data.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Featured Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <h2>{product.name}</h2>

            <p>{product.desc}</p>

            <h3>${product.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;