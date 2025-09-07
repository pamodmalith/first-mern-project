import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router";
import { BsMoon, BsPlusSquare, BsPlusSquareFill, BsSun } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container maxWidth={"1200px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
          gap={4}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"extrabold"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            <Link to={"/"}>Product Store</Link>
          </Text>
          <HStack spacing={2} justifyContent={"center"}>
            <Link to={"/create"}>
              <Button>
                <BsPlusSquare fontSize={"20px"} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <BsMoon /> : <BsSun />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
