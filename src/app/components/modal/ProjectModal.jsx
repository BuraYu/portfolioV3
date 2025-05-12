import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel";
import ProjectInfo from "./ProjectInfo";

const ProjectModal = ({
  modalIsOpen,
  closeModal,
  openFullscreen,
  project,
  nextProject,
  prevProject,
}) => {
  const [containerWidth, setContainerWidth] = useState("500px");

  useEffect(() => {
    const updateWidth = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth > 1100) {
        setContainerWidth("500px");
      } else {
        setContainerWidth("80vh");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "94vw",
      height: containerWidth,
      maxWidth: "1200px",
      overflow: "hidden",
      borderRadius: "12px",
      padding: "0px",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <ProjectCarousel
          images={project.carouselImages}
          onImageClick={openFullscreen}
        />
        <ProjectInfo
          project={project}
          onClose={closeModal}
          onNext={nextProject}
          onPrev={prevProject}
        />
      </div>
    </Modal>
  );
};

export default ProjectModal;
