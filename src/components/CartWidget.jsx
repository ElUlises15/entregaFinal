import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Circle, Center, IconButton } from "@chakra-ui/react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";
import { CiShoppingBasket } from "react-icons/ci";

const CartWidget = () => {
  const { ContadorCarrito } = useContext(CartContext);

  return (
    <Link to={"/carrito"}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="CartWidget"
          icon={<CiShoppingBasket />}
          size="md"
          fontSize="35px"
          mr="1"
        />
        <Circle as="span" bg="#F4D03F" w="30px" h="30px" color="#4A235A">
          <Center fontWeight="bold" fontSize="xs">
            {ContadorCarrito()}
          </Center>
        </Circle>
      </div>
    </Link>
  );
};

export default CartWidget;
