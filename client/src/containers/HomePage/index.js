import { Container, Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Navigation from "../Navigation/index";
import Carousel from "../../components/Common/Carousel";
import Slider from "../../components/Common/Favorites";

export default function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Container className="homepage">
      <Navigation token={token} />
      <Box>
        <Box sx={{ height: "20px" }}></Box>
        <Carousel />
        <Slider />
      </Box>
    </Container>
  );
}
