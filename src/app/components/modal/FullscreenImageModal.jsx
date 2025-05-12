import Modal from "react-modal";
import Image from "next/image";
import { CircleX } from "lucide-react";

const FullscreenImageModal = ({
  isFullScreenOpen,
  closeFullscreen,
  clickedImageIndex,
  project,
  nextImage,
  prevImage,
}) => (
  <Modal
    isOpen={isFullScreenOpen}
    onRequestClose={closeFullscreen}
    style={{
      content: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        padding: "0",
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      },
    }}
  >
    {/* Close Button */}
    <div
      onClick={closeFullscreen}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "16px",
        right: "16px",
        color: "white",
        fontSize: "2rem",
        zIndex: 10,
      }}
    >
      <CircleX color="white" size={32} />
    </div>

    {/* Image */}
    {project.carouselImages[clickedImageIndex] && (
      <Image
        src={project.carouselImages[clickedImageIndex].url}
        alt={project.carouselImages[clickedImageIndex].alt}
        width={1300}
        height={900}
        style={{ objectFit: "contain", maxWidth: "90vw", maxHeight: "80vh" }}
      />
    )}

    {/* Navigation Buttons */}
    <div
      style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "24px",
        zIndex: 10,
      }}
    >
      <button
        onClick={prevImage}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid white",
          borderRadius: "50%",
          padding: "12px",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid white",
          borderRadius: "50%",
          padding: "12px",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  </Modal>
);

export default FullscreenImageModal;
