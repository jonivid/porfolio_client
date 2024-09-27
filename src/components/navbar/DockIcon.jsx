// components/navbar/DockIcon.jsx
import React, { useRef } from "react";
import { Tooltip } from "@mui/material";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export default function DockIcon({
  icon,
  label,
  href,
  mousex,
  magnification = 50,
  distance = 100,
  onClick, // Accept onClick as a prop
}) {
  const ref = useRef(null);

  const distanceCalc = useTransform(mousex, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [30, magnification, 30],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Determine if this is a link or a button based on the presence of href or onClick
  const isLink = !!href;

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex items-center justify-center mx-2"
    >
      <Tooltip title={label} arrow>
        {isLink ? (
          // Render a navigational Link if href is provided
          <Link href={href}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              {React.cloneElement(icon, {
                style: { color: "#343232", fontSize: "1.5rem" },
              })}
            </motion.div>
          </Link>
        ) : (
          // Render a button-like element if onClick is provided
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={onClick} // Handle the click event
          >
            {React.cloneElement(icon, {
              style: { color: "#343232", fontSize: "1.5rem" },
            })}
          </motion.div>
        )}
      </Tooltip>
    </motion.div>
  );
}
