import React from "react";

import { BenefitsDisplay } from "@/components/Benefits";
import Automation from "@/public/assets/icons/benefits-icons/Automation";
import BoostRevenue from "@/public/assets/icons/benefits-icons/Boost-revenue";
import CustomerEngagement from "@/public/assets/icons/benefits-icons/Customer-engagement";
import Integration from "@/public/assets/icons/benefits-icons/Integration";
import Support from "@/public/assets/icons/benefits-icons/Support";
import Poster from "@/components/Poster";
import pic from "../../../../../../public/assets/images/poster-images/Overview section (1).png";
import InfoSection from "@/components/ThreePhones";
import ContactForm from "@/components/RequestDemoAndWorkForm";
import Testimonials from "@/components/testimonials";
import SecurityApp from "@/components/SmartphoneComponent";

function Page() {
  const benefitsWorkingEithRelyon = [
    {
      title: "Boost Revenue",
      description:
        "Attract and retain customers and unlock new revenue streams with Relyon.",
      icon: <BoostRevenue />,
    },
    {
      title: "Elevate Customer Engagement",
      description:
        "Keep your clients informed and engaged with real-time alerts and monitoring.",
      icon: <CustomerEngagement />,
    },
    {
      title: "Reduce Costs with Automation",
      description:
        "Automate routine tasks and allow your team to focus on critical activities.",
      icon: <Automation />,
    },
    {
      title: "Instant Support and Assistance",
      description:
        "Ensure immediate assistance with SOS alerts, video calls and chat features.",
      icon: <Support />,
    },
    {
      title: "Scalable and Seamless Integration",
      description:
        "Easily integrate Relyon's solutions with your existing systems.",
      icon: <Integration />,
    },
  ];
  const valueProps = [
    {
      title: "",
      description:
        "Description of what the experience is like for the end user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center ">
        <Poster
          backgroundImage={pic.src}
          title={"Enhance safety while \ndriving business growth"}
          description="As a leader in the security industry, you recognize the need for cutting-edge solutions. Partnering with Relyon offers a range of strategic advantages designed to elevate your services and operational efficiency."
          headline="SECURITY COMPANIES"
          button1Link={"/"}
          button1Text="Get started now > "
          button2Link={"/"}
          button2Text="Request demo > "
          isDark
        />

        <InfoSection
          description1="Strengthen client relationships with real-time monitoring, alerts, and two-way communication. Keep your clients informed and engaged with proactive safety measures that build trust and satisfaction."
          description2="Utilize AI-powered predictive analytics to make informed decisions about task force deployment. Our platform analyzes real-time data and trends, ensuring your resources are utilized where they are needed most."
          description3="Streamline your operations with advanced artificial intelligence. Relyon’s predictive analytics, urgency scoring, and automated task allocation ensure your resources are deployed efficiently and effectively."
          phone1Src={"aaa"}
          phone2Src={"bbb"}
          phone3Src={"ccc"}
          title1="Real Time Alert Management"
          title2="Data-Driven Decision Making"
          title3="Optimize Operations with AI"
        />

        <BenefitsDisplay
          title="Benefits of working with Relyon"
          benefits={benefitsWorkingEithRelyon}
        />

        <SecurityApp
          direction={false}
          primaryButtonText={"Get Started"}
          secondaryButtonText={"Request Demo"}
          valueProps={valueProps}
          title={"On-demand security \nservices for your members"}
          isGray={false}
        />

        <div className="bg-[#f2f5f6] w-full h-[60vh]">
          <Testimonials buttons={false}/>
        </div>
        <ContactForm isRequestingADemo formColor="bg-[#f2f5f6]" />
      </div>
    </>
  );
}

export default Page;
