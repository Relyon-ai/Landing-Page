import { RoundedBenefitsDisplay } from "@/components/Benefits";
import Poster from "@/components/Poster";
import Comunication from "@/public/assets/icons/benefits-icons/Comunication";
import Emergency from "@/public/assets/icons/benefits-icons/Emergency";
import Flexibillity from "@/public/assets/icons/benefits-icons/Flexibillity";
import SituationalAwareness from "@/public/assets/icons/benefits-icons/Situational-awareness";
import React from "react";
import pic from "../../../../../../public/assets/images/poster-images/Overview section (2).png";
import ContactForm from "@/components/RequestDemoAndWorkForm";
import Testimonials from "@/components/testimonials";

function Page() {
  const benefits = [
    {
      title: "Real-Time Situational Awareness",
      description:
        "Providing rescue teams with a comprehensive overview of the situation, allowing for informed decision-making and efficient resource allocation.",
      icon: <SituationalAwareness />,
    },
    {
      title: "Emergency Preparedness",
      description:
        "We empower communities to use our technology to be prepared for mass emergencies while improving overall safety and preparedness.",
      icon: <Comunication />,
    },
    {
      title: "Two-Way Communication",
      description:
        "Enable direct communication with individuals trapped under debris, improving coordination and increasing the chances of successful rescues.",
      icon: <Emergency />,
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Our solutions are designed to integrate seamlessly with existing systems, making it easy to scale and adapt to various emergency scenarios.",
      icon: <Flexibillity />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <Poster
          backgroundImage={pic.src}
          isDark={true}
          title={"Headline - explain the \nvalue and benefits"}
          description="In the event of a natural disaster or building collapse, Relyon provides rescue forces with a situational overview and two-way communication with those trapped under the rubble. We have a project with the IDF Home Front Command, and when working with rescue organizations in a specific geographical area, we allow the general public to install the SDK or the app and use this technology in emergencies."
          headline="Rescue and Evacuation"
        />
        <RoundedBenefitsDisplay title="Benefits " benefits={benefits} />
        <div className="bg-[#f2f5f6] w-screen  ">
          <div className="h-[70vh]">
            <Testimonials buttons={false}/>
          </div>
        </div>
        <ContactForm isRequestingADemo={false} formColor="bg-[#F2F5F6]" />
      </div>
    </>
  );
}

export default Page;
