import Poster from "@/components/Poster";
import React from "react";
import pic from "../../../../../public/assets/images/poster-images/Overview section (5).png";
import Testimonials from "@/components/testimonials";
import phonePic1 from "../../../../../public/assets/images/phone-images/iPhone 15.png";
import phonePic2 from "../../../../../public/assets/images/phone-images/iPhone 17 (1).png";
import phonePic3 from "../../../../../public/assets/images/phone-images/iPhone 17 (2).png";
import InfoSection from "@/components/ThreePhones";
function Page() {
  return (
    <>
      <Poster
        backgroundImage={pic.src}
        description="Explanation about the company / product
          i.e. we connect families so you always know where your loved ones are"
        isDark={false}
        title={"Stay safe.\nStay connected."}
        isPushed={true}
        headline="INDIVIDUALS"
        button1Text=" Check how to connect >"
        button1Link={"/"}
      />
      <div className=" bg-[#f2f5f6]">


      <InfoSection description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." phone1Src={phonePic1.src} phone2Src={phonePic2.src} phone3Src={phonePic3.src} title1="Location sharing" title2="Safe Driving" />
      </div>
      <Testimonials
        buttons={false}
        title="How Relyon keeps them safe"
        headline="FROM OUR USERS"
      />
      <Testimonials buttons={false} title="Maybe - blog posts" />
    </>
  );
}

export default Page;
