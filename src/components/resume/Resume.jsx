import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";

const Service = () => {

  return (
    <>
      <ul>
      {projects.map((val, i) => (
        <ProjectCard key={i} projectDetails={val} />
      ))}
      </ul>
    </>
  );
};

export default Service;
