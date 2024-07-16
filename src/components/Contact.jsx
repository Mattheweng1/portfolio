import { LINKS } from "../constants/constants";
import Button from "./Button";
import ContactForm from "./ContactForm";
import FlexWrapper from "./FlexWrapper";
import TitledSection from "./TitledSection";
import TitledCard from "./TitledCard";
import SlideInView from "./SlideInView";
import StaggerBox from "./StaggerBox";

const Contact = () => {
  return (
    <>
      <TitledSection title="Looking To" id="contact">
        <StaggerBox onView once staggerChildren={0.2}>
          <FlexWrapper className="gap-12">
            <TitledCard title="Offer Me a Job?">
              Web development is more than just a passion but what I see in my
              career long term. I don&apos;t know every language or tool for
              front-end development, but I&apos;m open to picking up new skills.
              If you think I&apos;m a fit for your project or role, please reach
              out, and we can discuss!
            </TitledCard>
            <TitledCard title="Connect?">
              Networking is important in nearly every field, and the tech
              industry is no exception. Whether you&apos;re a fellow developer,
              entrepreneur, or you have some other connection to web
              development, it would be great to connect. Let&apos;s chat and
              learn about each other&apos;s work!
            </TitledCard>
            <TitledCard title="Collaborate?">
              Web applications are vastly diverse in purpose and implementation.
              New products constantly innovate and evolve the market. If you
              have a cool project you think I should be a part of, I&apos;d be
              happy to hear about it. Let&apos;s build something together!
            </TitledCard>
          </FlexWrapper>
        </StaggerBox>
        <FlexWrapper className="items-center !justify-center gap-5">
          <SlideInView once initialX={-50}>
            <FlexWrapper className="items-center !justify-center gap-5">
              <div className="text-2xl font-light">Visit my</div>
              <Button isLink href={LINKS.linkedIn}>
                LinkedIn
              </Button>
              <div className="text-2xl font-light">or fill out this</div>
            </FlexWrapper>
          </SlideInView>
          <SlideInView
            className="rounded-lg mx-auto w-full lg:w-2/3 xl:w-1/2"
            once
            initialX={50}
          >
            <ContactForm />
          </SlideInView>
        </FlexWrapper>
      </TitledSection>
    </>
  );
};
export default Contact;
