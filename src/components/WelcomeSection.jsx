import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Typography, Box, Button } from "@mui/material";

const WelcomeSection = ({ scroll }) => (
  <>
    <ParallaxLayer offset={0} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.6}>
      <div className="slopeEnd pink" />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={0} speed={0.3}>
      <Box
        textAlign="center"
        p={5}
        m={3}
        bgcolor="rgba(255, 255, 255, 0.95)"
        boxShadow={4}
        borderRadius={3}
        maxWidth="900px"
        mx="auto"
        sx={{
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-10px)",
          },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          color="primary"
          sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}
        >
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="textSecondary"
          sx={{
            marginBottom: "2rem",
            fontFamily: "'Inter', sans-serif",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          I am a Full Stack Web Developer with expertise in crafting innovative,
          high-performance web applications.
        </Typography>
        <Button
          variant="contained"
          onClick={() => scroll(1)}
          sx={{
            textTransform: "none",
            padding: "12px 30px",
            borderRadius: "30px",
            minWidth: "150px",
            backgroundImage: "linear-gradient(45deg, #FF416C, #FF4B2B)",
            boxShadow: "0px 8px 15px rgba(255, 65, 108, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 12px 20px rgba(255, 65, 108, 0.6)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </ParallaxLayer>
  </>
);

export default WelcomeSection;
