import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Heading from "../Components/Heading";
import MovieGrid from "../Components/MovieGrid";

function RecommendedMovies({movies}) {
  return (
    <>
      <NavBar />
      <Box
        color="white"
        py={28}
        px={8}
      >
        <Heading heading={"Recommended by MovieCraze"} pb={4} />
        <br />
        <MovieGrid movies={movies} />
      </Box>
    </>
  );
}

export default RecommendedMovies;
