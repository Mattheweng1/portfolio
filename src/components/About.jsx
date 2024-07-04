import FlexWrapper from "./FlexWrapper";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageContainer>
        <SectionTitle title="About My"></SectionTitle>
        <FlexWrapper>
          <div className="max-w-xs text-center m-6">
            <h1 className="text-red-500 my-6 text-3xl font-light">Education</h1>
            <p className="text-xl">
              I learned most of my front-end development skills through
              hands-on, project-based learning with{" "}
              <a
                href="http://theodinproject.com/about"
                className="text-red-500"
              >
                The Odin Project
              </a>
              . It taught me many concepts, but most importantly, it taught me
              how to problem solve.
            </p>
          </div>
          <div className="max-w-xs text-center m-6">
            <h1 className="text-red-500 my-6 text-3xl font-light">Interests</h1>
            <p className="text-xl">
              Within programming, I&apos;m particularly interested in techniques
              to make aesthetic and user-friendly experiences. I also find
              algorithms to be fascinating. Aside from programming, I love
              volleyball, hiking, and gaming.
            </p>
          </div>
          <div className="max-w-xs text-center m-6">
            <h1 className="text-red-500 my-6 text-3xl font-light">
              Aspirations
            </h1>
            <p className="text-xl">
              Looking ahead, I&apos;m excited to continue refining my front-end
              development skills, but I also plan to learn back-end. For life
              goals, I hope to fulfill my dream of living in different places
              across the world while working remotely.
            </p>
          </div>
        </FlexWrapper>
        <SectionTitle title="Skills" />
        <div>Skill Icons</div>
        <FlexWrapper>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
        </FlexWrapper>
      </PageContainer>
    </>
  );
};
export default About;
