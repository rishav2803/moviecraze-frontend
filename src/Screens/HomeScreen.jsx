import { Box } from "@chakra-ui/react";
import Hero from "../Sections/Hero";
import Movies from "../Components/Movies";
import Footer from "../Sections/Footer";
import Login from "./Login";
import Register from "./Register";
function HomeScreen() {
  return(
    <Box> 
      {/* <Login/> */}
      {/* <Register/> */}
      <Hero/>
      <Movies />
      <Footer/>
    </Box> 
  );
}

export default HomeScreen;
