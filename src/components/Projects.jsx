import { PROJECTS } from "../constants/constants";
import FlexWrapper from "./FlexWrapper";
import FlexWrapperItem from "./FlexWrapperItem";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageContainer>
        <SectionTitle title="Projects" />
        {PROJECTS.map((item, i) => (
          <FlexWrapper key={i}>
            <FlexWrapperItem className="p-8">
              <img
                className="rounded-2xl"
                src="src/assets/about.jpg"
                alt="Portrait Photo of Matthew"
              />
            </FlexWrapperItem>
            <FlexWrapperItem className="lg:items-start">
              <ProjectDetails project={item} />
            </FlexWrapperItem>
          </FlexWrapper>
        ))}
      </PageContainer>
    </>
  );
};
export default Projects;
