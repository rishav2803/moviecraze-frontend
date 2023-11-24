import React from "react";
import {ChakraProvider, Box, Flex, Input, Button, Link, Text} from "@chakra-ui/react";
import login from "../Assets/Login.jpg";
import MovieBg from "../Assets/movie_background.jpg";

const Login = () => {
  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={`url(${MovieBg}) center / cover`}
      >
        <Box
          position="relative"
          width="295px"
          height="500px"
          background="#121212"
          borderRadius="20px"
          boxShadow="0 6px 20px rgba(0,0,0,.4)"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="-20px"
            width="100%"
            height="300px"
            bg={`url(${login}) center / cover`}
          />
          <Box
            position="absolute"
            content=""
            width="100%"
            height="100%"
            zIndex="1"
            background="linear-gradient(to top, #121212 65%, transparent)"
          />
          <Box
            position="absolute"
            bottom="0"
            zIndex="2"
            width="100%"
            height="330px"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
            fontFamily="'Poppins', sans-serif"
          >
            <form>
              <Flex
                width="260px"
                height="200px"
                display="flex"
                flexDirection="column"
                // justifyContent="space-evenly"
              >
                <Input
                  type="email"
                  autocomplete="off"
                  name="email"
                  fontSize="13px"
                  placeholder="Email"
                  border="none"
                  height="40px"
                  outline="none !important"
                  borderRadius="3px"
                  width="100%"
                  margin="40px 0 5px 0"
                  background="#333333"
                  color="#fff"
                  padding="0 10px"
                  _placeholder={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#737373",
                  }}
                  _focus={{ backgroundColor: "#333333" }}
                />
                <Input
                  type="password"
                  name="password"
                  fontSize="13px"
                  placeholder="Password"
                  border="none"
                  height="40px"
                  outline="none !important"
                  borderRadius="3px"
                  width="100%"
                  margin="5px 0"
                  background="#333333"
                  color="#fff"
                  padding="0 10px"
                  _placeholder={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#737373",
                  }}
                  _focus={{ backgroundColor: "#333333" }}
                />

                {/* <Button
                background="#F3C010"
                borderRadius="3px"
                color="#fff"
                marginTop='20px'
                width="100%" 
                fontSize="16px"
                fontWeight="bolder"
                fontFamily="'Poppins', sans-serif"
                cursor="pointer">
                Sign in
              </Button> */}

                <Button
                  bgGradient="linear(to-r, #F09819 0%, #EDDE5D 51%, #F09819 100%)"
                  marginTop="20px"
                  transition="0.5s"
                  backgroundSize="200% auto"
                  color="#fff"
                  borderRadius="3px"
                  display="block"
                  _hover={{
                    bgGradient:
                      "linear(to-r, #F09819 0%, #EDDE5D 51%, #F09819 100%)",
                    backgroundPosition: "right center",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Button>
              </Flex>
            </form>
            <Box width="260px" color="#737373" fontSize="10px">
              <p>New to MovieCraze?{" "}
                <Link href="#" color="#fff" _hover={{ textDecoration: "none" }}>
                  Sign up now
                </Link>
              </p>
            </Box>
            
            <Text color="#F3C010" fontSize="24px" fontWeight="800">
              MovieCraze
            </Text>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Login;
