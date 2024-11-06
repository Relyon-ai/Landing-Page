import Poster from "@/components/Poster";
import React from "react";
import pic from "../../../../../../public/assets/images/poster-images/Overview section (6).png";
import { RoundedBenefitsDisplay } from "@/components/Benefits";
import ExpandRevenue from "@/public/assets/icons/benefits-icons/Expand-revenue";
import BrandValue from "@/public/assets/icons/benefits-icons/Brand-value";
import Support from "@/public/assets/icons/benefits-icons/Support";
import Sales from "@/public/assets/icons/benefits-icons/Sales";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/RequestDemoAndWorkForm";
import SecurityServices from "@/components/Pic-description";
import SecurityApp from "@/components/SmartphoneComponent";
function Page() {
  const partnerBenefits = [
    {
      title: "Expand Revenue Streams",
      description:
        "Offer cutting-edge, AI-driven safety solutions to your clients. Attract and retain customers, and open new revenue opportunities.",
      icon: <ExpandRevenue />,
    },
    {
      title: "Strengthened Brand Value",
      description:
        "Elevate your brand’s reputation as a provider of state-of-the-art security technology, offering reliable and effective safety solutions.",
      icon: <BrandValue />,
    },
    {
      title: "Extensive Support and Training",
      description:
        "We provide comprehensive support and training, from onboarding to ongoing assistance, so you can effectively market and sell our products. ",
      icon: <Support />,
    },
    {
      title: "Marketing and Sales Resources",
      description:
        "Our co-marketing initiatives and ready-to-use materials ensure you can reach your target audience and drive sales with confidence.",
      icon: <Sales />,
    },
  ];
  const valueProps = [
    {
      title: "",
      description:
        "Description of what the experience is like for the end user. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
  ];
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <Poster
          backgroundImage={pic.src}
          isDark
          title={"Personal safety services \nfor your customers"}
          description="Explanation about the partnership program / product.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci"
          headline="PARTNERS"
          button1Link={"/"}
          button1Text="Become a partner >"
        />

        <RoundedBenefitsDisplay
          title="Partner benefits"
          benefits={partnerBenefits}
        />
        <div className="bg-[#f2f5f6] w-screen flex justify-center items-center">
          <SecurityServices
            title="Who can become a 
          Relyon partner?"
            isGray={true}
            buttonText1="Become a partner"
            isReversed={true}
            imageSrcs={["aaa"]}
            valueProps={[
              {
                title: "",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
            ]}
          />
        </div>
        <SecurityApp
        direction={false}
        primaryButtonText={"Become a partner"}
        valueProps={valueProps}
        title={"On-demand security \nservices for your members"}
        isGray={false}
        />
        <div className="h-70vh w-screen bg-[#f2f5f6] py-[6%]">
          <Testimonials />
        </div>
        <ContactForm
          isRequestingADemo={false}
          title="Become a partner"
          formColor="bg-[#f2f5f6]"
        />
      </div>
    </>
  );
}

export default Page;
