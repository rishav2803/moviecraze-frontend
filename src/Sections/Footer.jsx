import {
  Box,
  Flex,
  Text,
  Input,
  Center,
  Divider,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  const categories = [
    { name: "Action Movies", count: 5 },
    { name: "Crime", count: 3 },
    { name: "Drama", count: 5 },
    { name: "Comedy", count: 4 },
    { name: "Biography", count: 4 },
  ];
  return (
    <Box>
      <Box
        h={"80vh"}
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/footer_bg.jpg')"
        bgPosition="center"
        bgSize="cover"
        style={customFontStyle}
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt="20"
        px="48"
      >
        <Flex flexDirection="column" alignItems="flex-start">
          <Flex alignItems="center" mb={2}>
            <FontAwesomeIcon
              icon={faClapperboard}
              style={{ color: "#e4d804", marginRight: "6px", fontSize: "25px" }}
            />
            <Text fontWeight="1000" fontSize="25px">
              MovieCraze
            </Text>
          </Flex>

          <Text mt="4" color="#D2CFCF" fontSize="15px">
            Lights, Camera, Reviews:
            <br />
            Your Ticket to Movie Mastery!
            <br />
            <br />
            <Flex flexDirection="row" alignItems="center">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#D2CFCF", paddingRight: "7px" }}
              />
              <Text> Address: Nerul, Navi Mumbai </Text>
            </Flex>
            <br />
            <Flex flexDirection="row" alignItems="center">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#D2CFCF", paddingRight: "7px" }}
              />
              <Text> Phone: +24 1245 654 235 </Text>
            </Flex>
            <br />
            <Flex flexDirection="row" alignItems="center">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#D2CFCF", paddingRight: "5px" }}
              />
              <Text> Email: info@example.com </Text>
            </Flex>
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="flex-start">
          <Text mb={2} fontWeight="600" fontSize="20px">
            Categories
          </Text>
          <Divider
            borderColor="yellow"
            borderWidth="2px"
            marginY="2"
            width="55px"
            borderRadius="2px"
          />
          {categories.map((category, index) => (
            <Text key={index} color="#D2CFCF" fontSize="15px" mt={4}>
              {category.name}
              <span
                style={{ paddingLeft: "1rem" }}
              >{`(${category.count})`}</span>
            </Text>
          ))}
        </Flex>

        {/* Follow Us */}
        <Flex
          flexDirection="column"
          alignItems="left"
          fontWeight="600"
          fontSize="20px"
        >
          <Text>Follow Us</Text>
          <Divider
            borderColor="yellow"
            borderWidth="2px"
            marginY="2"
            width="55px"
            borderRadius="2px"
          />
          <Flex flexDirection="row" alignItems="center" mt={6}>
            <FontAwesomeIcon
              icon={faFacebook}
              color="#0866FF"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faPinterest}
              color="	#E60023"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#0072b1"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              backgroundImage="linear-gradient(to right, #F09433, #FF8E3E)"
              size="2xl"
            />
          </Flex>
          <br />

          <Flex>
            <InputGroup width="250px">
              <Input
                variant="outline"
                placeholder="Enter your email"
                color="white"
                borderRadius="25px"
                height="52px"
                border="none"
                bgColor="black"
              />
              <InputRightElement mt={1} borderRadius="50%" mr={1} bgColor="#1d222b">
                <FontAwesomeIcon icon={faRocket} size="lg" color="#e4d804" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Box>
      <Center
        bgColor="Black"
        color="#D2CFCF"
        height="70px"
        px="48"
        fontSize="12px"
      >
        Copyright © 2023 All Rights Reserved By MovieCraze
      </Center>
    </Box>
  );
}

export default Footer;
