import React from "react";
import { useState } from "react";
import Image from "next/image";
import "./modal.css";
import Modal from "react-modal";
import techBook from "../../../public/images/techbook_img.jpg";
import techBookPreview from "../../../public/images/techbook_screenshot.png";

const ModalPreview = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

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
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
    },
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="div6-content" onClick={openModal}>
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
          <div
            className="img-container"
            style={{ overflowY: "auto" }}
          >
            <Image
              src={techBook}
              alt="Image of the techbook website"
              layout="intrinsic"              
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="modal-description">
            <h2 className="modal-title">TechBook</h2>
            <p>
              TechBook is a platform for sharing and discovering tech-related
              articles and projects.
            </p>
            <div className="tech-stack-container">
              <p className="tech-stack">
                Tech stack
                <div className="badges">
                  <span className="badges-frontend">React</span>
                  <span className="badges-backend">NodeJS</span>
                  <span className="badges-backend">MongoDB</span>
                </div>
              </p>
            </div>
            <div className="modal-links">
              <li>
                <a
                  href="https://github.com/BuraYu/techbook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="http://techbook-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </li>
            </div>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
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
  );
};

export default ModalPreview;
