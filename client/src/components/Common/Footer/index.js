import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        marginTop: "40px",
        padding: "20px 0",
      }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          position: "relative",
        }}
      >
        <Box sx={{ color: "white" }}>
          <Typography variant="h5" component="h1" marginTop={3}>
            Company
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
            consectetur nisl, eu consectetur nisl nisl euismod nisl.
          </p>
        </Box>
        <Box sx={{ color: "white" }}>
          <Typography variant="h5" component="h1" marginTop={3}>
            Products
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
            consectetur nisl, eu consectetur nisl nisl euismod nisl.
          </p>
        </Box>
        <Box sx={{ color: "white" }}>
          <Typography variant="h5" component="h1" marginTop={3}>
            Support
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
            consectetur nisl, eu consectetur nisl nisl euismod nisl.
          </p>
        </Box>
        <Box sx={{ color: "white" }}>
          <Typography variant="h5" component="h1" marginTop={3}>
            Contact
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl
            consectetur nisl, eu consectetur nisl nisl euismod nisl.
          </p>
        </Box>
      </Container>
    </Box>
  );
}
