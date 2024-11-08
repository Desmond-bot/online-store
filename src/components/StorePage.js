import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import productsData from "../data/products";
import { useNavigate } from "react-router-dom";

const StoreContainer = styled.div`
  padding: 20px;
  position: relative;
`;

const CartInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CartCount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ViewCartButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
`;

const StorePage = () => {
  const dispatch = useDispatch();
  // Get the list of books from the Redux store
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: productsData });
  }, [dispatch]);

  const navigate = useNavigate();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <StoreContainer>
      <CartInfo>
        <CartCount>Items in Cart: {cart.items.length}</CartCount>
        <ViewCartButton onClick={() => navigate("/cart")}>
          View Cart
        </ViewCartButton>
      </CartInfo>
      <h1>Book Store</h1>
      <ProductList>
        {/* Render each book item */}
        {products.map((product) => (
          <ProductItem key={product.isbn}>
            <ProductImage src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Subtitle: {product.subtitle}</p>
            <p>Author: {product.author}</p>
            <p>Published: {new Date(product.published).toDateString()}</p>
            <p>Publisher: {product.publisher}</p>
            <p>Pages: {product.pages}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </ProductItem>
        ))}
      </ProductList>
    </StoreContainer>
  );
};

export default StorePage;
