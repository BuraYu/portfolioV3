import React, { useState, useEffect } from "react";
import { CircleX, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Modal from "react-modal";
import Slider from "react-slick";
import projectData from "../data/projectData";
import "../styles/modal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalPreview = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectNumber, setProjectNumber] = useState(0);
  const [project, setProject] = useState(projectData[projectNumber]);

  const handleNextProject = () => {
    if (projectNumber + 1 < projectData.length) {
      setProjectNumber(projectNumber + 1);
    } else {
      setProjectNumber(0);
    }
  };

  const handlePrevProject = () => {
    if (projectNumber === 0) {
      setProjectNumber(projectData.length - 1);
    } else {
      setProjectNumber(projectNumber - 1);
    }
  };

  useEffect(() => {
    setProject(projectData[projectNumber]);
  }, [handleNextProject, handlePrevProject]);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "94vw",
      maxWidth: "1200px",
      maxHeight: "95vh",
      overflow: "auto",
      borderRadius: "12px",
      padding: "0px",
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="div6-content" onClick={() => setIsOpen(true)}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          {/* Carousel */}
          <div className="img-container">
            <Slider {...sliderSettings}>
              {project.carouselImages.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    width={700}
                    height={700}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Info */}
          <div className="modal-description">
            <CircleX
              className="modal-close-button"
              onClick={() => setIsOpen(false)}
            />
            <h2 className="modal-title">{project.title}</h2>
            <h3>About</h3>
            <p>{project.description}</p>

            <div className="tech-stack-container">
              <h3 className="tech-stack">Technologies</h3>
              <div className="badges">
                {project.tech.frontend.map((tech, i) => (
                  <span className="badges-frontend" key={`fe-${i}`}>
                    {tech}
                  </span>
                ))}
                {project.tech.backend.map((tech, i) => (
                  <span className="badges-backend" key={`be-${i}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              <a
                className="github-button"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="github-icon" />
                View Code
              </a>
              <a
                className="visit-website-button"
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="external-link-icon" />
                Visit Website
              </a>
            </div>

            {/* Project arrows */}
            <div className="nav-buttons">
              <button className="nav-button" onClick={handlePrevProject}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <span className="sr-only"></span>
              </button>

              <button className="nav-button" onClick={handleNextProject}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="sr-only"></span>
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Preview */}
      <div className="pre-modal-container">
        <p>{project.title}</p>
        <div style={{ position: "relative", width: "300px", height: "250px" }}>
          <Image
            src={project.previewImage.url}
            alt={project.previewImage.alt}
            fill
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        <p>Click to learn more</p>
      </div>
    </div>
  );
};

export default ModalPreview;
