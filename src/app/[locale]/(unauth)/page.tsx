import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

import ImpactComponent from "@/components/Difference";
import SecurityServices from "@/components/Pic-description";
import Poster from "@/components/Poster";
import ContactForm from "@/components/RequestDemoAndWorkForm";
import SecurityApp from "@/components/SmartphoneComponent";
import Testimonials from "@/components/testimonials";

import pic from "../../../../public/assets/images/poster-images/Overview section.png";

function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();
  const valueProps = [
    {
      title: "Voice activation",
      description:
        "Activate emergency services hands-free with our voice recognition technology. Simply say your safe phrase to trigger an immediate response.",
    },
    {
      title: "Real-time location tracking",
      description:
        "Our app provides continuous location updates to emergency contacts and responders, ensuring help arrives exactly where it's needed.",
    },
    {
      title: "Instant alerts",
      description:
        "Send immediate notifications to your pre-selected emergency contacts with just one tap, keeping your loved ones informed in critical situations.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Poster
        isDark
        backgroundImage={pic.src}
        title={t("HomePoster.title")}
        description={t("HomePoster.description")}
        button1Text={t("HomePoster.button1Text")}
        button1Link="/home"
        button2Text={t("HomePoster.button2Text")}
        button2Link="/home"
      />
      <SecurityServices
        headline="SECURITY COMPANIES"
        title="Offer on-demand security services"
        valueProps={valueProps}
        isReversed={false}
        imageSrcs={["aaaa", "bbbb"]}
        buttonText1="Get Started Now"
        buttonText2="Book Demo"
      />
      <SecurityApp
        direction
        primaryButtonText="Check how to connect"
        valueProps={valueProps}
      />
      <div className="h-screen w-screen">
        <Testimonials />
      </div>
      <ImpactComponent />
      <ContactForm isRequestingADemo />
    </div>
  );
}

export default Page;
