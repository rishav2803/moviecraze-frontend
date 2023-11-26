// import { Search2Icon, ChatIcon } from "@chakra-ui/icons";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { themeConfig } from "../utils/themeConfig";

const Links = ["bollywood", "hollywood", "favourites", "contact"];

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: themeConfig.iconstextColor,
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        color={"whiteAlpha.900"}
        px={14}
        py={6}
        position={"absolute"}
        zIndex={10}
        width={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={"center"}>
            <FontAwesomeIcon
              icon={faClapperboard}
              style={{ color: "#e4d804", fontSize: "30px" }}
            />
            <Box paddingRight={20} fontSize={30} fontWeight={600}>
              MovieCraze
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  _hover={{ color: themeConfig.iconstextColor }}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack cursor={"pointer"} minW={0}>
            {/* <Search2Icon w={8} h={8} px={2}></Search2Icon> */}

            <button className="btn-border">SIGN IN</button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
