
// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import {themeConfig} from "../utils/themeConfig";
import NavBar from "../Components/NavBar";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import heroSectionbg from '../Assets/heroSectionbg.jpg';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroSectionbg}

            alt="Image One"
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

            <div
              className="carousel-desc"
              style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}
            >
              <p
                style={{
                  color: "#212529",
                  backgroundColor: "#f8f9fa",
                  padding: ".4rem .6rem",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                PG 18
              </p>
              <p
                style={{
                  color: "#f8f9fa",
                  border: "2px solid #f8f9fa",
                  padding: ".4rem .6rem",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                HD
              </p>
              <p>Action, Comedy</p>
              <p>
                <CalendarIcon></CalendarIcon>
                <span style={{ marginLeft: "10px" }}></span>2022
              </p>
              <p>
                <TimeIcon></TimeIcon>
                <span style={{ marginLeft: "10px" }}></span>120 min
              </p>
            </div>
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
              Unlimited <span className="text-yellow">Movie</span>, <br></br>
              TVs Shows, & More.
            </h1>

            <br></br>
            <div
              className="carousel-desc"
              style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}
            >
              <p
                style={{
                  color: "#212529",
                  backgroundColor: "#f8f9fa",
                  padding: ".4rem .6rem",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                PG 18
              </p>
              <p
                style={{
                  color: "#f8f9fa",
                  border: "2px solid #f8f9fa",
                  padding: ".4rem .6rem",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                }}
              >
                HD
              </p>
              <p>Action, Comedy</p>
              <p>
                <CalendarIcon></CalendarIcon>
                <span style={{ marginLeft: "10px" }}></span>2022
              </p>
              <p>
                <TimeIcon></TimeIcon>
                <span style={{ marginLeft: "10px" }}></span>120 min
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
