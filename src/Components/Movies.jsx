/* eslint-disable react/prop-types */
// import React from "react";
import { Box, Flex, Spacer, Icon } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Heading from "../Components/Heading";

import MovieGrid from "./MovieGrid.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNMovies,
  selectBollywoodMovies,
  selectHollywoodMovies,
  selectLoading,
} from "../Redux/movieSlice.js";
import Loading from "./Loading.jsx";

function Movies() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };
  const dispatch = useDispatch();
  const bollywoodMovies = useSelector(selectBollywoodMovies);
  const hollywoodMovies = useSelector(selectHollywoodMovies);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getNMovies());
    document.title="MovieCraze | Movie Recomendation";
  }, []);

  if (loading) {
    return <Loading mssg="" />;
  }

  return (
    <Box
      style={customFontStyle}
      px={3}
      py={50}
      bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
      bgPosition="center"
    >
      <Box>
        <Flex p={4} flexDirection={"column"} justifyContent={"flex-start"}>
          <Heading pb={4} heading={"Latest Bollywood Release"}/>
        </Flex>
        <Spacer />
        {/* <Box p="4"> */}
        {/*   <CustomTabs /> */}
        {/* </Box> */}
      </Box>

      <MovieGrid movies={bollywoodMovies} />

      {/* Move ArrowRightIcon below the last Bollywood movie */}
      <Flex justifyContent="flex-end" mt={4}>
        <Icon as={ArrowRightIcon} boxSize={6} color="yellow" mt={4} mr={6} />
      </Flex>

      <Flex p={4} flexDirection={"column"} justifyContent={"flex-start"}>
          <Heading pb={4} heading={"Latest Hollywood Release"}/>
      </Flex>

      <MovieGrid movies={hollywoodMovies} />

      {/* Move ArrowRightIcon below the last Hollywood movie */}
      <Flex justifyContent="flex-end">
        <Icon as={ArrowRightIcon} boxSize={6} color="yellow" mt={4} mr={6} />
      </Flex>
    </Box>
  );
}

export default Movies;
