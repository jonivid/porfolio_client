// components/navbar/FloatingDock.jsx
import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

// Styled component for the floating dock-like container
const StyledFloatingDock = styled(motion.div)({
  position: "fixed",
  bottom: 20, // Adjust this value to position the navbar closer to the bottom
  left: "50%",
  transform: "translateX(-50%)",
  padding: "4px 8px",
  borderRadius: "32px",
  backgroundColor: "#ffffff", // Set background color to white
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)", // Blurred background effect
  zIndex: 1000,
  minWidth: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease", // Transition for smooth changes
});

export default function FloatingDock({ children, ...props }) {
  return <StyledFloatingDock {...props}>{children}</StyledFloatingDock>;
}
