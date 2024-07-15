import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import StaggerItem from "./StaggerItem";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <StaggerItem initialX={50} duration={0.75}>
        <h1 className="text-xl font-bold text-red-500">{project.title}</h1>
      </StaggerItem>
      <StaggerItem initialX={50} duration={0.75}>
        <p className="text-center lg:text-left">{project.description}</p>
      </StaggerItem>
      <StaggerItem initialX={50} duration={0.75}>
        <ul className="flex gap-1 font-bold text-red-900">
          {project.technologies.map((item, i) => (
            <React.Fragment key={i}>
              <li>{item}</li>
              {i !== project.technologies.length - 1 && <li>-</li>}
            </React.Fragment>
          ))}
        </ul>
      </StaggerItem>
      <StaggerItem className="flex gap-8 mt-8" initialX={50} duration={0.75}>
        <Button isLink href={project.link.live}>
          Website
        </Button>
        <Button isLink href={project.link.code}>
          Code
        </Button>
      </StaggerItem>
    </>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
