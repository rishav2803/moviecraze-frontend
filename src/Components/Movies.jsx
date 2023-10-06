import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  Box,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { TimeIcon, StarIcon, ArrowRightIcon } from "@chakra-ui/icons";
import data0 from "../Utils/bollywoodMovies.js";
import data1 from "../Utils/hollywoodMovies.js";

const CustomTabs = () => (
  <Tabs variant="soft-rounded" colorScheme="yellow">
    <TabList color="white" py={2}>
      {["Movies", "Action", "Comedy", "Horror"].map((tab, index) => (
        <Tab
          key={index}
          color="white"
          mx="3"
          borderColor="#363636"
          borderWidth="2px"
          fontSize="xs"
          _selected={{
            border: "2px solid yellow",
            color: "white",
          }}
        >
          {tab}
        </Tab>
      ))}
    </TabList>
  </Tabs>
);

const MovieDetails = ({ movie }) => (
  <Box borderRadius="3px" overflow="hidden" bg="transparent">
    <Image src={movie.cover} alt={movie.title} width="100%" height="380px" mb={2} objectFit="cover" />
    <Box py={4}>
      <Flex justifyContent="space-between" alignItems="center" fontSize="sm">
        <Text fontWeight="800" color="white">{movie.title}</Text>
        <Text color="#e4d804">{movie.year}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt={2} fontSize="xs">
        <Text color="#D2CFCF">
          <TimeIcon color="#e4d804" boxSize={3} mr={1} />
          {movie.runtime}
        </Text>
        <Text color="#D2CFCF">
          <StarIcon color="#e4d804" boxSize={3} paddingBottom={"2px"} mr={1} />
          {movie.rating}
        </Text>
      </Flex>
    </Box>
  </Box>
);

const MovieGrid = ({ movies }) => (
  <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={6} pl={4} pr={7}>
    {movies.map((movie) => (
      <GridItem key={movie.id} colSpan={1}>
        <MovieDetails movie={movie} />
      </GridItem>
    ))}
  </Grid>
);

const Movies = () => {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  const bollywoodMovies = data0.slice(0, 4);
  const hollywoodMovies = data1.slice(0, 4);

  return (
    <Box
      h={"207vh"}
      style={customFontStyle}
      px={12}
      py={55}
      bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
      bgPosition="center"
      bgSize="cover"
      backgroundSize="150%"
    >
      <Flex alignItems="center">
        <Box p="4" color="white" fontSize="30px" fontWeight="800">
          Bollywood Movies
        </Box>
        <Spacer />
        <Box p="4">
          <CustomTabs />
        </Box>
      </Flex>
      <MovieGrid movies={bollywoodMovies} />

      {/* Move ArrowRightIcon below the last Bollywood movie */}
      <Flex justifyContent="flex-end" mt={4}>
        <Icon as={ArrowRightIcon} boxSize={6} color="yellow" mt={4} mr={6}/>
      </Flex>

      <Flex alignItems="center">
        <Box p="4" color="white" fontSize="30px" fontWeight="800" mt="12">
          Hollywood Movies
        </Box>
      </Flex>
      <MovieGrid movies={hollywoodMovies} />

      {/* Move ArrowRightIcon below the last Hollywood movie */}
      <Flex justifyContent="flex-end">
        <Icon as={ArrowRightIcon} boxSize={6} color="yellow" mt={4} mr={6}/>
      </Flex>
    </Box>
  );
};

export default Movies;
