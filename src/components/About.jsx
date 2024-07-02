import { ABOUT_TEXT } from "../constants/constants";
import Button from "./Button";
import FlexWrapper from "./FlexWrapper";
import FlexWrapperItem from "./FlexWrapperItem";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import PageTitle from "./PageTitle";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageContainer>
        <PageTitle title="About"></PageTitle>
        <FlexWrapper>
          <FlexWrapperItem className="p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </FlexWrapperItem>
          <FlexWrapperItem>
            <p className="text-center lg:text-left">{ABOUT_TEXT.part1}</p>
          </FlexWrapperItem>
        </FlexWrapper>
        <FlexWrapper className="flex-row-reverse">
          <FlexWrapperItem className="p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </FlexWrapperItem>
          <FlexWrapperItem>
            <p className="text-center lg:text-left">{ABOUT_TEXT.part2}</p>
          </FlexWrapperItem>
        </FlexWrapper>
        <FlexWrapper>
          <FlexWrapperItem className="p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </FlexWrapperItem>
          <FlexWrapperItem>
            <p className="text-center lg:text-left">{ABOUT_TEXT.part3}</p>
          </FlexWrapperItem>
        </FlexWrapper>
        <FlexWrapper className="flex-row-reverse">
          <FlexWrapperItem className="p-8">
            <img
              className="rounded-2xl"
              src="src/assets/about.jpg"
              alt="Portrait Photo of Matthew"
            />
          </FlexWrapperItem>
          <FlexWrapperItem>
            <p className="text-center lg:text-left">{ABOUT_TEXT.part4}</p>
            <Button
              route="/contact"
              text="Hire me!"
              className="lg:self-start"
            />
          </FlexWrapperItem>
        </FlexWrapper>
      </PageContainer>
    </>
  );
};
export default About;
