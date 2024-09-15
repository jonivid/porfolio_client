// app/components/ProjectCard.js
"use client"; // Enable client-side rendering

import { useState, useRef } from "react";
import Image from "next/image"; // Import the Next.js Image component

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // Event handlers for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to the start
      videoRef.current.play(); // Play the video
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video to the start
    }
  };

  return (
    <div
      className="relative w-full max-w-sm bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video and Preview Image Container */}
      <div className="relative w-full h-48">
        {isHovered ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={project.videoSrc}
            muted // Mute video by default
            autoPlay
            loop // Loop the video
            style={{ display: isHovered ? "block" : "none" }} // Prevent flicker
          />
        ) : (
          <Image
            src={project.previewImage}
            alt={project.title}
            layout="fill" // Use fill to cover the container
            objectFit="cover" // Crop or fit the image properly
            className="absolute inset-0" // Positioning to prevent flicker
          />
        )}
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
