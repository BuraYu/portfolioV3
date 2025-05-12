import { useProjectModal } from "../hooks/useProjectModal";
import ProjectModal from "./ProjectModal";
import FullscreenImageModal from "./FullscreenImageModal";
import ProjectPreviewCard from "./ProjectPreviewCard";

const ModalPreview = () => {
  const modalProps = useProjectModal();

  return (
    <div className="div6-content" onClick={modalProps.openModal}>
      <ProjectModal {...modalProps} />
      <FullscreenImageModal {...modalProps} />
      <ProjectPreviewCard project={modalProps.project} />
    </div>
  );
};

export default ModalPreview;
