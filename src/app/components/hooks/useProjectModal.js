import { useState, useEffect } from "react";
import projectData from "../../data/projectData";

export const useProjectModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [projectNumber, setProjectNumber] = useState(0);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);
  const project = projectData[projectNumber];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openFullscreen = (i) => {
    setClickedImageIndex(i);
    setIsFullScreenOpen(true);
  };
  const closeFullscreen = () => setIsFullScreenOpen(false);

  const nextProject = () =>
    setProjectNumber((prev) => (prev + 1) % projectData.length);

  const prevProject = () =>
    setProjectNumber((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );

  const nextImage = () =>
    setClickedImageIndex((prev) =>
      prev + 1 < project.carouselImages.length ? prev + 1 : 0
    );

  const prevImage = () =>
    setClickedImageIndex((prev) =>
      prev === 0 ? project.carouselImages.length - 1 : prev - 1
    );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Modal = require("react-modal");
      Modal.setAppElement("#__next");
    }
  }, []);

  return {
    modalIsOpen,
    isFullScreenOpen,
    openModal,
    closeModal,
    openFullscreen,
    closeFullscreen,
    clickedImageIndex,
    project,
    nextProject,
    prevProject,
    nextImage,
    prevImage,
  };
};
