import React from "react";
import projectData from "../data/projectData";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project-main__container">
      <div className="project-title__container">
        {projectData.map((ele, index) => (
          <h1 key={index}>{ele.title.toUpperCase()}</h1>
        ))}
      </div>
      <div className="project-details__container">
        <div className="project-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vero
          deleniti! Deleniti eaque, illum repellendus reiciendis fuga eum. Ad
          explicabo id blanditiis amet asperiores. Laudantium eum et excepturi
          sint. Doloremque impedit possimus esse a quibusdam, cumque voluptatem
          vel molestias repellat, autem voluptates quam. Veniam, quaerat.
          Molestias sequi officia vitae tempore quis excepturi, maiores hic in
          labore laudantium esse sunt sed a ab eaque deserunt temporibus quam
          quidem? Sapiente exercitationem iusto et, voluptatibus soluta,
          delectus accusamus doloremque pariatur, natus consequatur nulla
          inventore repellat quas sit? Repudiandae, eligendi. Hic, perspiciatis
          inventore quia reprehenderit possimus tenetur nam quas? Ducimus
          aspernatur temporibus sequi! Doloribus asperiores laborum
          necessitatibus. Amet in fugiat tempora id veritatis dolores
          consequuntur, nam soluta eos est nemo dolorem aliquid aperiam neque
          sed. Sint, est sit architecto praesentium quisquam culpa suscipit
          vitae exercitationem. Accusamus incidunt, obcaecati cumque asperiores
          doloribus, sit unde quasi voluptates ducimus mollitia nihil explicabo
          ea repudiandae deserunt ab ut, similique neque debitis! Repudiandae
          error maiores molestias facilis praesentium, soluta nulla ullam fugiat
          velit nemo tenetur saepe neque voluptatem ut porro ipsa quo illo cum
          hic doloremque. Placeat maiores illum eius libero impedit, aperiam aut
          asperiores error minima sit alias porro quisquam! Voluptatibus,
          doloremque. Ipsa earum delectus quos vero similique.
        </div>
      </div>
    </div>
  );
};

export default Projects;
