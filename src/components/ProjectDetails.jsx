import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <h1 className="text-xl font-bold text-red-500">{project.title}</h1>
      <p className="text-center lg:text-left">{project.description}</p>
      <ul className="flex gap-1 font-bold text-red-900">
        {project.technologies.map((item, i) => (
          <React.Fragment key={i}>
            <li>{item}</li>
            {i !== project.technologies.length - 1 && <li>-</li>}
          </React.Fragment>
        ))}
      </ul>
      <div className="flex gap-8 mt-8">
        <Button isLink href={project.link.live}>
          Website
        </Button>
        <Button isLink href={project.link.code}>
          Code
        </Button>
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
