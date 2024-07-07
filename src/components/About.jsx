import FlexWrapper from "./FlexWrapper";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt } from "react-icons/fa6";
import SkillLabel from "./SkillLabel";
import TitledCard from "./TitledCard";
import SkillIconBox from "./SkillIconBox";

const About = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <SectionTitle title="About My" />
        <FlexWrapper className="gap-12">
          <TitledCard title="Education">
            I learned most of my front-end development skills through hands-on,
            project-based learning with{" "}
            <a
              href="http://theodinproject.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              The Odin Project
            </a>
            . It taught me many concepts, but most importantly, it taught me how
            to problem solve.
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
        <SectionTitle title="Skills" />
        <FlexWrapper className="!justify-center gap-1 md:gap-3 lg:gap-5 text-3xl sm:text-6xl md:text-7xl">
          <SkillIconBox>
            <FaHtml5 className="text-orange-500"></FaHtml5>
          </SkillIconBox>
          <SkillIconBox>
            <FaCss3 className="text-blue-500"></FaCss3>
          </SkillIconBox>
          <SkillIconBox>
            <FaJs className="text-yellow-400"></FaJs>
          </SkillIconBox>
          <SkillIconBox>
            <FaGitAlt className="text-orange-600"></FaGitAlt>
          </SkillIconBox>
          <SkillIconBox>
            <FaReact className="text-cyan-400"></FaReact>
          </SkillIconBox>
        </FlexWrapper>
        <FlexWrapper className="gap-5 !justify-center">
          <SkillLabel text="HTML" />
          <SkillLabel text="CSS" />
          <SkillLabel text="JavaScript" />
          <SkillLabel text="React" />
          <SkillLabel text="Tailwind CSS" />
          <SkillLabel text="Firebase" />
          <SkillLabel text="Git" />
          <SkillLabel text="Jest" />
          <SkillLabel text="Webpack" />
        </FlexWrapper>
      </PageContainer>
    </>
  );
};
export default About;
