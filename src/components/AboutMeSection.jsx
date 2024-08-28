import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Typography, Box, Button, Stack } from "@mui/material";

const AboutMeSection = ({ scroll }) => (
  <>
    <ParallaxLayer offset={1} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.6}>
      <div className="slopeEnd teal" />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={1} speed={0.3}>
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
          About Me
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="textSecondary"
          sx={{
            lineHeight: "1.8",
            fontFamily: "'Inter', sans-serif",
            maxWidth: "750px",
            mx: "auto",
          }}
        >
          I am a Full Stack Web Developer with 3 years of experience
          specializing in building scalable and high-performance web
          applications, particularly in the financial trading industry. My
          experience encompasses the full development lifecycle, from gathering
          requirements to deploying solutions in cloud environments like AWS. I
          excel in collaborating with cross-functional teams to deliver
          mission-critical applications. With strong skills in frontend
          technologies like React and Angular, and backend systems like Node.js
          and Python, I have successfully created and maintained applications
          that serve large user bases globally. I also have experience in DevOps
          practices, ensuring CI/CD pipelines are robust and efficient for
          faster deployments.
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => scroll(0)}
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
            onClick={() => scroll(2)}
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
            Next
          </Button>
        </Stack>
      </Box>
    </ParallaxLayer>
  </>
);

export default AboutMeSection;
