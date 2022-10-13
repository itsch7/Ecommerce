import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ filter, sort, cat }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);


  useEffect ( () => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`:"http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    fetchProducts();
  },[cat]);
  useEffect ( () => {
    cat && setFilterProducts(
      products.filter(product => Object.entries(filter).every(([key,value]) => product[key].includes(value)))
  )
},[cat,products,filter]);
useEffect ( () => {
 if(sort === "newest"){
  setFilterProducts((prev)=> [...prev].sort((a,b) => a.createdAt -b.createdAt)
  ) 
 }else if(sort === "asc"){setFilterProducts((prev)=> [...prev].sort((a,b) => a.price -b.price))

  
} else {  setFilterProducts((prev)=> [...prev].sort((a,b) => b.price -a.price))


}
},[sort]);

  return (
    <Container>
      { cat ? filterProducts.map((item) => (
        <Product item={item} key={item.id} />
      )): products.map((item) => (
        <Product item={item} key={item.id} data ={products} />
      ))}
    </Container>
  );
};

export default Products;
