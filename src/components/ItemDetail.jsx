import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Card
        border="black, 10px, solid"
        maxW="sm"
        backgroundColor="#4A235A"
        color="#F4D03F"
      >
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#F4D03F">
              <img src={item.imagen} alt={item.nombre} />
              <br />
              <br />
              <p>Producto: {item.nombre}</p>
            </Heading>
            <Text color="#F4D03F">Categoría: {item.categoria}</Text>
            <Text color="#F4D03F">Descripción: {item.descripcion}</Text>
            <Text color="#F4D03F">Precio: ${item.precio}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          {}
          <ItemCount item={item} />
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default ItemDetail;
