// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { themeConfig } from "../Utils/themeConfig";
import NavBar from "../Components/NavBar";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";
import img01 from "../assets/Kungfu panda.jpeg"
import img02 from "../assets/bade miyan chote miya.jpg"
import img03 from "../assets/WhatsApp Image 2024-04-21 at 19.57.27.jpeg"
import img04 from "../assets/Dune.jpeg";

export default function Hero() {
  return (
    <Box>
      <NavBar />
      <Carousel>
        <Carousel.Item>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="flex-start"
            h="100vh"
            w="full"
          >
            <Box
              position="absolute"
              left="0"
              top="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)" 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={{ base: "4", md: "8", lg: "16" }} 
              color="white"
            >
              <Text
                as="h3"
                color={themeConfig.iconstextColor}
                lineHeight={"1.4"}
                fontWeight="700"
                mb="2"
              >
                New Release
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} 
                mb="4"
                className="big-font"
              >
                Kung Fu<Text as="span" className="text-yellow">Panda 4</Text> <br />
              </Text>
              <Text
                as="h5"
                mb="4"
                w={"50%"}
              >
                After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit
              </Text>
              <MovieDetail year={2024} duration={160} />
            </Box>
            <Image
              src={img01}
              alt="Image One"
              h="100vh"
              w="full"
              objectFit="cover"
            />
          </Flex>
        </Carousel.Item>
        <Carousel.Item>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="flex-start"
            h="100vh"
            w="full"
          >
            <Box
              position="absolute"
              left="0"
              top="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)" 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={{ base: "4", md: "8", lg: "16" }} 
              color="white"
            >
              <Text
                as="h3"
                color={themeConfig.iconstextColor}
                fontWeight="700"
                mb="2"
              >
                New Release
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} 
                mb="4"
                className="big-font"
              >
                Bade Miyan <Text as="span" className="text-yellow">Chote Miyan</Text> <br />
              </Text>
              <Text
                as="h5"
                mb="4"
                lineHeight="1.4"
                w={"50%"}
              >
                With their contrasting personalities and maverick methods, Bade Miyan and Chote Miyan need to overcome their differences and labor together to transport the offenders to impartiality and preserve the day.
              </Text>
              <MovieDetail year={2024} duration={160} />
            </Box>
            <Image
              src={img02}
              alt="Image Two"
              h="100vh"
              w="full"
              objectFit="cover"
            />
          </Flex>
        </Carousel.Item>
        <Carousel.Item>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="flex-start"
            h="100vh"
            w="full"
          >
            <Box
              position="absolute"
              left="0"
              top="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)" 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={{ base: "4", md: "8", lg: "16" }} 
              color="white"
            >
              <Text
                as="h3"
                color={themeConfig.iconstextColor}
                fontWeight="700"
                mb="2"
              >
                New Release
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} 
                mb="4"
                className="big-font"
              >
               Article <Text as="span" className="text-yellow">370 </Text> <br />
              </Text>
              <Text
                as="h5"
                mb="4"
                lineHeight="1.4"
                w={"50%"}
              >
                After 2016 Kashmir unrest, local agent Zooni Haksar chosen for secret mission by Rajeshwari to end terrorism and conflict economy by abrogating Article 370 without bloodshed.
              </Text>
              <MovieDetail year={2024} duration={156} />
            </Box>
            <Image
              src={img03}
              alt="Image Two"
              h="100vh"
              w="full"
              objectFit="cover"
            />
          </Flex>
        </Carousel.Item>
        <Carousel.Item>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="flex-start"
            h="100vh"
            w="full"
          >
            <Box
              position="absolute"
              left="0"
              top="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)" 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              px={{ base: "4", md: "8", lg: "16" }} 
              color="white"
            >
              <Text
                as="h3"
                color={themeConfig.iconstextColor}
                fontWeight="700"
                mb="2"
              >
                New Release
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} 
                mb="4"
                className="big-font"
              >
               Dune: <Text as="span" className="text-yellow">Part Two</Text> <br />
              </Text>
              <Text
                as="h5"
                mb="4"
                lineHeight="1.4"
                w={"50%"}
              >
                Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
              </Text>
              <MovieDetail year={2024} duration={166} />
            </Box>
            <Image
              src={img04}
              alt="Image Two"
              h="100vh"
              w="full"
              objectFit="cover"
            />
          </Flex>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}
