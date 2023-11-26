import {Box} from "@chakra-ui/react";
import HomeScreen from "./Screens/HomeScreen";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Show from "./Screens/Show";

function App() {
  return(
  
    <Router>
    <Box bg={"teal"} h={"100vh"}>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/show" element={<Show />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Box>
  </Router>
    

    
  );
}



export default App
