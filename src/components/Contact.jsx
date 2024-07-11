import { LINKS } from "../constants/constants";
import Button from "./Button";
import ContactForm from "./ContactForm";
import FlexWrapper from "./FlexWrapper";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
import SectionTitle from "./SectionTitle";
import TitledCard from "./TitledCard";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <SectionTitle title="Looking To" />
        <FlexWrapper className="gap-12">
          <TitledCard title="Offer Me a Job?">
            Web development is more than just a passion but what I see in my
            career long term. I don&apos;t know every language or tool for
            front-end development, but I&apos;m open to picking up new skills.
            If you think I&apos;m a fit for your project or role, please reach
            out, and we can discuss!
          </TitledCard>
          <TitledCard title="Connect?">
            Networking is important in nearly every field, and the tech industry
            is no exception. Whether you&apos;re a fellow developer,
            entrepreneur, or you have some other connection to web development,
            it would be great to connect. Let&apos;s chat and learn about each
            other&apos;s work!
          </TitledCard>
          <TitledCard title="Collaborate?">
            Web applications are vastly diverse in purpose and implementation.
            New products constantly innovate and evolve the market. If you have
            a cool project you think I should be a part of, I&apos;d be happy to
            hear about it. Let&apos;s build something together!
          </TitledCard>
        </FlexWrapper>
        <FlexWrapper className="flex-col gap-5">
          <FlexWrapper className="items-center !justify-center gap-5 !m-0">
            <div className="text-2xl font-light">Visit my</div>
            <Button isExternal route={LINKS.linkedIn} text="LinkedIn" />
          </FlexWrapper>
          <div className="text-center text-2xl font-light">or</div>
          <div className="text-center text-2xl font-light">fill out this</div>
          <ContactForm />
        </FlexWrapper>
      </PageContainer>
    </>
  );
};
export default Contact;
