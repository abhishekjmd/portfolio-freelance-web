import React, { useEffect, useRef } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Envelope from "../../icons/envelope";
import ContactForm from "./ContactForm";
import { useGlobalContext } from "../../context/ContextProvider";
import Border from "./Border";

const Contact = () => {
  const { sectionRef } = useGlobalContext();
  const contactRef = useRef();
  useEffect(() => {
    sectionRef.current["contactMe"] = contactRef.current;
  }, [sectionRef]);
  return (
    <div ref={contactRef} className="flex lg:block text-[white] mb-12">
      <Container className="flex lg:block flex-col gap-8">
        <div className="relative  lg:mt-16 flex flex-col gap-6 z-10">
          <div>
            <Border />
          </div>
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
        <div className="lg:mt-10 w-full">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
