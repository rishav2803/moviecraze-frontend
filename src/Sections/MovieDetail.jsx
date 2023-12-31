import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { themeConfig } from "../Utils/themeConfig";

export default function MovieDetail({ movieType, year, duration }) {
  return (
    <div
      className="carousel-desc"
      style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}
    >
      <p
        style={{
          color: "#212529",
          backgroundColor: "#f8f9fa",
          padding: ".2rem .6rem",
          fontSize: "0.8rem",
          fontWeight: "700",
        }}
      >
        PG 18
      </p>
      <p
        style={{
          color: "#f8f9fa",
          boxShadow: "1px 1px 1px 1px #f8f9fa",
          padding: ".2rem .6rem",
          fontSize: "0.8rem",
          fontWeight: "700",
        }}
      >
        HD
      </p>
      <p>{movieType}</p>
      <p>
        <CalendarIcon color={themeConfig.iconstextColor}></CalendarIcon>
        <span style={{ marginLeft: "10px" }}></span>
        {year}
      </p>
      <p>
        <TimeIcon color={themeConfig.iconstextColor}></TimeIcon>
        <span style={{ marginLeft: "10px" }}></span>
        {duration} min
      </p>
    </div>
  );
}
