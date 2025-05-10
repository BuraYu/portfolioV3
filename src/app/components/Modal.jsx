import React from "react";
import { CircleX, Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/modal.css";
import Modal from "react-modal";
import techBook from "../../../public/images/techbook_img.jpg";
import techBookPreview from "../../../public/images/techbook_screenshot.png";

const ModalPreview = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    console.log("Close button clicked");
    setIsOpen(false);
  }
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

  return (
    <div className="div6-content" onClick={openModal}>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={true}
        >
          <div
            className="modal-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="img-container">
              <Image
                src="https://picsum.photos/400/400"
                width={700}
                height={700}
                alt="Image of the techbook website"
                layout="intrinsic"
              />
            </div>
            <div className="modal-description">
              <CircleX className="modal-close-button" onClick={closeModal} />

              <h2 className="modal-title">TechBook</h2>
              <h3>About</h3>
              <p>
                A fully responsive e-commerce platform with cart functionality,
                user authentication, and payment processing. Features include
                product filtering, search functionality, and admin dashboard for
                inventory management.
              </p>
              <div className="tech-stack-container">
                <h3 className="tech-stack">Technologies</h3>
                <div className="badges">
                  <span className="badges-frontend">React</span>
                  <span className="badges-frontend">React</span>

                  <span className="badges-frontend">React</span>
                  <span className="badges-backend">NodeJS</span>
                  <span className="badges-backend">MongoDB</span>
                </div>
              </div>
              <div className="modal-links">
                <a
                  className="github-button"
                  href="https://github.com/burayu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="github-icon" />
                  View Code
                </a>
                <a
                  className="visit-website-button"
                  href="https://somevercellink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="external-link-icon" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </Modal>
        <p>TechBook</p>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "250px",
          }}
        >
          <Image
            src={techBookPreview}
            alt="screenshot of the latest project"
            fill
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
        <p>Click to learn more</p>
      </div>
    </div>
  );
};

export default ModalPreview;
