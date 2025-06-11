"use client";
import React, { useEffect, useRef, useState } from "react";
import projectData from "../data/projectData";
import "./Projects.css";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Projects = () => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="project-main__container">
      <div className="project-title__container">
        {projectData.map((ele, index) => (
          <h1
            key={index}
            className={index === activeIndex ? "active-title" : ""}
          >
            {ele.title.toUpperCase()}
          </h1>
        ))}
      </div>

      <div className="project-sections__container">
        {projectData.map((ele, index) => (
          <section
            key={index}
            className="project-section"
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
          >
            <div className="project-details">
              <div className="slider-wrapper">
                <Slider {...settings}>
                  {ele.carouselImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img.url}
                      alt={img.alt}
                      width={1800}
                      height={1800}
                      loading="lazy"
                      style={{ cursor: "pointer", borderRadius: "20px" }}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
