import Image from "next/image";

const ProjectPreviewCard = ({ project }) => (
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
);

export default ProjectPreviewCard;
