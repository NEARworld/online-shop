import { Container } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Navigation from "../Navigation/index";

export default function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Container>
      <Navigation token={token} />
    </Container>
  );
}