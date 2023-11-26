// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { themeConfig } from "../utils/themeConfig";
import NavBar from "../Components/NavBar";
import { Box, Image } from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";
import heroSectionbg from '../Assets/heroSectionbg.jpg';

export default function App() {
  return (
    <Box>
      <NavBar></NavBar>

      <Carousel>
        <Carousel.Item>
          <Image
            // className="d-block w-100"
            // src={themeConfig.heroSectionbg}
            src={heroSectionbg}
            alt="Image One"
            objectFit="cover"
          />
          <div className="carousel-caption">
            <h3 style={{ color: themeConfig.iconstextColor, fontWeight: 700 }}>
              MovieCraze
            </h3>
            <h1 className="big-font">
              Unlimited <span className="text-yellow">Movies</span>, <br></br>
              Unlimited Entertainment
            </h1>
            <br></br>
            <MovieDetail year={2022} duration={120} />
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={heroSectionbg}
            alt="Image Two"
          />
          <div className="carousel-caption">
            <h3 style={{ color: themeConfig.iconstextColor, fontWeight: 700 }}>
              MovieCraze
            </h3>
            <h1 className="big-font">
              Unlimited <span className="text-yellow">Movies</span>, <br></br>
              Unlimited Entertainment
            </h1>

            <br></br>
            <MovieDetail year={2022} duration={120} />
          </div>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}
