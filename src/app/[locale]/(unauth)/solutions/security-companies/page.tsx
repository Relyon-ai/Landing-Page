import React from 'react'
import BoostRevenue from '@/public/assets/icons/benefits-icons/Boost-revenue';
import { BenefitsDisplay, RoundedBenefitsDisplay } from '@/components/Benefits';
import Support from '@/public/assets/icons/benefits-icons/Support';
import Automation from '@/public/assets/icons/benefits-icons/Automation';
import CustomerEngagement from '@/public/assets/icons/benefits-icons/Customer-engagement';
import Integration from '@/public/assets/icons/benefits-icons/Integration';
import SituationalAwareness from '@/public/assets/icons/benefits-icons/Situational-awareness';
import Comunication from '@/public/assets/icons/benefits-icons/Comunication';
import Emergency from '@/public/assets/icons/benefits-icons/Emergency';
import Flexibillity from '@/public/assets/icons/benefits-icons/Flexibillity';
import ExpandRevenue from '@/public/assets/icons/benefits-icons/Expand-revenue';
import BrandValue from '@/public/assets/icons/benefits-icons/Brand-value';
import Sales from '@/public/assets/icons/benefits-icons/Sales';


function Page() {

  const benefitsWorkingEithRelyon = [
    {
      title: "Boost Revenue",
      description: "Attract and retain customers and unlock new revenue streams with Relyon.",
      icon: <BoostRevenue  />
    },
    {
      title: "Elevate Customer Engagement",
      description: "Keep your clients informed and engaged with real-time alerts and monitoring.",
      icon: <CustomerEngagement  />
    },
    {
      title: "Reduce Costs with Automation",
      description: "Automate routine tasks and allow your team to focus on critical activities.",
      icon: <Automation  />
    },
    {
      title: "Instant Support and Assistance",
      description: "Ensure immediate assistance with SOS alerts, video calls and chat features.",
      icon: < Support />
    },
    {
      title: "Scalable and Seamless Integration",
      description: "Easily integrate Relyon's solutions with your existing systems.",
      icon:<Integration  />
    }
  ]
  const benefits = [
    {
      title: "Real-Time Situational Awareness",
      description: "Providing rescue teams with a comprehensive overview of the situation, allowing for informed decision-making and efficient resource allocation.",
      icon: <SituationalAwareness  />
    },
    {
      title: "Emergency Preparedness",
      description: "We empower communities to use our technology to be prepared for mass emergencies while improving overall safety and preparedness.",
      icon: <Comunication  />
    },
    {
      title: "Two-Way Communication",
      description: "Enable direct communication with individuals trapped under debris, improving coordination and increasing the chances of successful rescues.",
      icon: <Emergency  />
    },
    {
      title: "Scalability and Flexibility",
      description: "Our solutions are designed to integrate seamlessly with existing systems, making it easy to scale and adapt to various emergency scenarios.",
      icon: <Flexibillity  />
    },
    
  ]
  const partnerBenefits = [
    {
      title: "Expand Revenue Streams",
      description: "Offer cutting-edge, AI-driven safety solutions to your clients. Attract and retain customers, and open new revenue opportunities.",
      icon: <ExpandRevenue  />
    },
    {
      title: "Strengthened Brand Value",
      description: "Elevate your brand’s reputation as a provider of state-of-the-art security technology, offering reliable and effective safety solutions.",
      icon: <BrandValue  />
    },
    {
      title: "Extensive Support and Training",
      description: "We provide comprehensive support and training, from onboarding to ongoing assistance, so you can effectively market and sell our products. ",
      icon: <Support  />
    },
    {
      title: "Marketing and Sales Resources",
      description: "Our co-marketing initiatives and ready-to-use materials ensure you can reach your target audience and drive sales with confidence.",
      icon: <Sales  />
    },
    
  ]



  return (
    <>
    <BenefitsDisplay
        title="Benefits of working with Relyon"
        benefits={benefitsWorkingEithRelyon}
      />
    <RoundedBenefitsDisplay
        title="Benefits of working with Relyon"
        benefits={benefits}
      />
    <RoundedBenefitsDisplay
        title="Partner benefits"
        benefits={partnerBenefits}
      />
    </>

  )
}

export default Page