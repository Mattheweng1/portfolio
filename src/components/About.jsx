import FlexWrapper from "./FlexWrapper";
import TitledSection from "./TitledSection";
import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt } from "react-icons/fa6";
import SkillLabel from "./SkillLabel";
import TitledCard from "./TitledCard";
import SkillIconBox from "./SkillIconBox";
import { LINKS } from "../constants/constants";
import SlideInView from "./SlideInView";
import StaggerBox from "./StaggerBox";
import HoverTap from "./HoverTap";

const About = () => {
  return (
    <>
      <TitledSection title="About My" id="about">
        <StaggerBox onView once staggerChildren={0.2}>
          <FlexWrapper className="gap-12">
            <TitledCard title="Education">
              I learned most of my front-end development skills through
              hands-on, project-based learning with{" "}
              <HoverTap
                className="inline-block"
                initialColor="#ef4444"
                hoveredColor="#b91c1c"
                tappedColor="#b91c1c"
                hoveredScaleX={1.05}
                duration={0.1}
              >
                <a
                  href={LINKS.theOdinProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Odin Project
                </a>
              </HoverTap>
              . It taught me many concepts, but most importantly, it taught me
              how to problem solve.
            </TitledCard>
            <TitledCard title="Interests">
              Within programming, I&apos;m particularly interested in techniques
              to make aesthetic and user-friendly experiences. I also find
              algorithms to be fascinating. Aside from programming, I love
              volleyball, hiking, and gaming.
            </TitledCard>
            <TitledCard title="Aspirations">
              Looking ahead, I&apos;m excited to continue refining my front-end
              development skills, but I also plan to learn back-end. For life
              goals, I hope to fulfill my dream of living in different places
              across the world while working remotely.
            </TitledCard>
          </FlexWrapper>
        </StaggerBox>
      </TitledSection>
      <TitledSection title="Skills" id="skills">
        <SlideInView once initialX={-50}>
          <FlexWrapper className="!justify-center gap-1 md:gap-3 lg:gap-5 text-3xl sm:text-6xl md:text-7xl">
            <SkillIconBox duration={5}>
              <FaHtml5 className="text-orange-500"></FaHtml5>
            </SkillIconBox>
            <SkillIconBox duration={2.5}>
              <FaCss3 className="text-blue-500"></FaCss3>
            </SkillIconBox>
            <SkillIconBox duration={2}>
              <FaJs className="text-yellow-400"></FaJs>
            </SkillIconBox>
            <SkillIconBox duration={6}>
              <FaGitAlt className="text-orange-600"></FaGitAlt>
            </SkillIconBox>
            <SkillIconBox duration={3}>
              <FaReact className="text-cyan-400"></FaReact>
            </SkillIconBox>
          </FlexWrapper>
        </SlideInView>
        <StaggerBox
          className="flex flex-wrap my-16 gap-5 justify-center"
          onView
          once
          staggerChildren={0.1}
        >
          <SkillLabel text="HTML" />
          <SkillLabel text="CSS" />
          <SkillLabel text="JavaScript" />
          <SkillLabel text="React" />
          <SkillLabel text="Tailwind CSS" />
          <SkillLabel text="Firebase" />
          <SkillLabel text="Git" />
          <SkillLabel text="Jest" />
          <SkillLabel text="Webpack" />
        </StaggerBox>
      </TitledSection>
    </>
  );
};
export default About;
