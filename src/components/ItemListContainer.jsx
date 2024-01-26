import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { pedirInfo } from "../utils/PedirData";
import { Flex, Box, Badge, Button } from "@chakra-ui/react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    pedirInfo().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
      } else {
        setProductos(res);
      }
    });
  }, [categoria]);

  return (
    <Flex direction="column" justify="center" p={4}>
      {productos.map((producto) => (
        <Box
          key={producto.id}
          m={4}
          maxW="sm"
          borderWidth="5px"
          borderColor={"black"}
          backgroundColor={"#4A235A"}
          color={"#F4D03F"}
          borderRadius="lg"
          overflow="hidden"
        >
          {}
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ width: "100%", height: "100%", objectFit: "hidden" }}
          />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge
                borderRadius="full"
                px="2"
                backgroundColor="black"
                color="white"
              >
                {producto.categoria}
              </Badge>
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {producto.nombre}
            </Box>
            <Box>{}</Box>
            <Link to={`/item/${producto.id}`}>
              <Button backgroundColor="#F4D03F" variant="solid" color="white">
                {" "}
                Ver detalles
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ItemListContainer;
