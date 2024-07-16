import { LINKS, PROJECTS } from "../constants/constants";
import FlexWrapper from "./FlexWrapper";
import FlexWrapperItem from "./FlexWrapperItem";
import TitledSection from "./TitledSection";
import ProjectDetails from "./ProjectDetails";
import Button from "./Button";
import SlideInView from "./SlideInView";
import StaggerBox from "./StaggerBox";

const Projects = () => {
  return (
    <>
      <TitledSection title="Projects" id="projects">
        {PROJECTS.map((item, i) => (
          <StaggerBox key={i} onView once staggerChildren={0.2}>
            <FlexWrapper>
              <FlexWrapperItem className="p-8">
                <SlideInView once initialX={-50}>
                  <img
                    className="rounded-2xl border-2 border-neutral-500"
                    src={item.image.src}
                    alt={item.image.alt}
                  />
                </SlideInView>
              </FlexWrapperItem>
              <FlexWrapperItem className="lg:items-start">
                <ProjectDetails project={item} />
              </FlexWrapperItem>
            </FlexWrapper>
          </StaggerBox>
        ))}
        <SlideInView once initialY={50}>
          <FlexWrapper className="items-center !justify-center gap-5">
            <div className="text-2xl font-light">Visit my</div>
            <Button isLink href={LINKS.gitHub}>
              GitHub
            </Button>
            <div className="text-2xl font-light">to see more</div>
          </FlexWrapper>
        </SlideInView>
      </TitledSection>
    </>
  );
};
export default Projects;
