import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const ProjectCarousel = ({ images, onImageClick }) => (
  
  <div className="img-container">
    <Slider {...sliderSettings}>
      {images.map((img, idx) => (
        <div
          key={idx}
          onClick={() => onImageClick(idx)}
          style={{ position: "relative", width: "100%" }}
        >
          <Image
            src={img.url}
            alt={img.alt}
            width={500}
            height={500}
            loading="lazy"
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </Slider>
  </div>
);

export default ProjectCarousel;
