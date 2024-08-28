import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Typography, Box, Button, Stack, Grid } from "@mui/material";

const ProjectsSection = ({ scroll }) => (
  <>
    <ParallaxLayer offset={2} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={2} speed={0.6}>
      <div className="slopeEnd tomato" />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={2} speed={0.3}>
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
          Projects
        </Typography>
        <Grid container spacing={3} sx={{ maxWidth: "900px", mx: "auto" }}>
          <Grid item xs={12} sm={6}>
            <Box
              p={3}
              boxShadow={3}
              bgcolor="white"
              borderRadius={2}
              minHeight="150px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Derivatives Pricer App
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Managed large volumes of Bloomberg pricing data with efficient
                data processing pipelines.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              p={3}
              boxShadow={3}
              bgcolor="white"
              borderRadius={2}
              minHeight="150px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Portfolio Website
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Developed a personal portfolio using Next.js, React, and
                Material UI with a fully responsive design.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => scroll(1)}
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
            onClick={() => scroll(3)}
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

export default ProjectsSection;
