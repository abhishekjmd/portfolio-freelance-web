import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Envelope from "../../icons/envelope";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex text-[white]">
      <Container className="flex flex-col gap-20">
        <div className="relative flex flex-col gap-6 z-10">
          <SectionHeader
            className="relative"
            icon={
              <>
                <Envelope height={28} width={28} />
                <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
              </>
            }
            title="Contact Me"
            description={
              <div>
                Get in <span className="text-blue-400">contact</span> and
                let&apos;s <span className="text-blue-400">work together</span>
              </div>
            }
          />
        </div>
        <div>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
