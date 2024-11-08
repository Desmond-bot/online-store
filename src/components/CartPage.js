import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setShippingMethod } from "../store/actions/actions";

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const CartItemTitle = styled.h2`
  margin: 0 0 10px 0;
`;

const CartItemDetail = styled.p`
  margin: 5px 0;
`;

const TotalCost = styled.h3`
  margin-top: 20px;
`;

const ShippingMethodLabel = styled.label`
  display: block;
  margin-top: 20px;
`;

const ShippingMethodSelect = styled.select`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Handle shipping method change
  const handleShippingMethodChange = (e) => {
    dispatch(setShippingMethod(e.target.value));
  };

  return (
    <CartContainer>
      <h1>Cart</h1>
      {cart.items.map((item) => (
        <CartItem key={item.id}>
          <CartItemTitle>{item.name}</CartItemTitle>
          <CartItemDetail>Author: {item.author}</CartItemDetail>
          <CartItemDetail>Price: R{item.price}</CartItemDetail>
        </CartItem>
      ))}
      <TotalCost>Total Cost: R{cart.totalCost}</TotalCost>
      <ShippingMethodLabel htmlFor="shipping-method">
        Select Shipping Method:
      </ShippingMethodLabel>
      <ShippingMethodSelect
        id="shipping-method"
        onChange={handleShippingMethodChange}
      >
        <option value="standard">Standard</option>
        <option value="express">Express</option>
      </ShippingMethodSelect>
    </CartContainer>
  );
};

export default CartPage;
