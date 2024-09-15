/* eslint-disable react/no-unescaped-entities */
// app/page.js
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function page() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of Project 1",
      previewImage: "/assets/website_ui_pic.jpg", // Replace with your actual preview image path
      videoSrc: "/assets/website_ui.mp4", // Replace with your actual video path
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of Project 2",
      previewImage: "/assets/website_ui_b&w_pic.jpg", // Replace with your actual preview image path
      videoSrc: "/assets/website_ui_B&W.mp4", // Replace with your actual video path
    },
    {
      id: 3,
      title: "Project 1",
      description: "A brief description of Project 1",
      previewImage: "/assets/website_ui_pic1.jpg", // Replace with your actual preview image path
      videoSrc: "/assets/website_ui1.mp4", // Replace with your actual video path
    },
    {
      id: 4,
      title: "Project 2",
      description: "A brief description of Project 2",
      previewImage: "/assets/website_ui_pic2.jpg", // Replace with your actual preview image path
      videoSrc: "/assets/website_ui2.mp4", // Replace with your actual video path
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-10">My Projects</h1>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Check out my latest work
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
