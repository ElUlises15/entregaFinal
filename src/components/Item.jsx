import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Center,
  background,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" color="green">
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Producto: {producto.nombre}</p>
              </Heading>
              <Text color="black">Categoría: {producto.categoria}</Text>
            </Stack>
          </Center>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default Item;
