import React from "react";
import CartWidget from "./CartWidget.jsx";
import {
  Flex,
  Box,
  Spacer,
  Menu,
  MenuButton,
  Button,
  Center,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "#4A235A", color: "#F4D03F" }}>
      <Center fontSize="5xl" p="4" as="i">
        Tienda de Ropa Aylen
      </Center>
      <Flex alignItems="center" paddingLeft="300">
        <Box p="2">
          <Link to={"/"}>
            <h1>Inicio</h1>
          </Link>
        </Box>
        <Menu p="2" border={("10px", "solid", "white")}>
          <MenuButton>Categorias</MenuButton>
          <MenuList backgroundColor={"#4A235A"}>
            <MenuItem backgroundColor={"#4A235A"}>
              <Link to="/category/calzado">
                <p>Calzado</p>
              </Link>
            </MenuItem>
            <MenuItem backgroundColor={"#4A235A"}>
              <Link to="/category/pantalon">
                <p>Pantalones</p>
              </Link>
            </MenuItem>
            <MenuItem backgroundColor={"#4A235A"}>
              <Link to="/category/remera">
                <p>Remeras</p>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
}

export default NavBar;
