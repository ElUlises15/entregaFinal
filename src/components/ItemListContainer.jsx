import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Flex, Box, Badge, Button } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProductos(docs);
    });
  }, []);

  const filteredProducts = categoria
    ? productos.filter((producto) => producto.categoria === categoria)
    : productos;

  return (
    <Flex direction="column" justify="center" p={4}>
      {filteredProducts.map((producto) => (
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
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
