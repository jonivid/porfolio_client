import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Typography, Box, Button, Stack } from "@mui/material";

const ContactSection = ({ scroll }) => (
  <>
    <ParallaxLayer offset={4} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={4} speed={0.6}>
      <div className="slopeEnd orange" />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={4} speed={0.3}>
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
          variant="h2"
          component="h2"
          gutterBottom
          color="primary"
          sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="textSecondary"
          sx={{
            lineHeight: "1.8",
            fontFamily: "'Inter', sans-serif",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          I'm always open to discussing new opportunities and projects. Feel
          free to reach out to me via email at yonivid@gmail.com or connect with
          me on LinkedIn.
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => scroll(3)}
            sx={{
              textTransform: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              minWidth: "150px",
              backgroundImage: "linear-gradient(45deg, #00B4DB, #0083B0)",
              boxShadow: "0px 8px 15px rgba(0, 180, 219, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 12px 20px rgba(0, 180, 219, 0.6)",
              },
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            href="mailto:yonivid@gmail.com"
            sx={{
              textTransform: "none",
              padding: "12px 30px", // Ensuring equal spacing
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
            Send Email
          </Button>
        </Stack>
      </Box>
    </ParallaxLayer>
  </>
);

export default ContactSection;
