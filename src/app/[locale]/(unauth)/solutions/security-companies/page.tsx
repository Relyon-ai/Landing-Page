import React from 'react'
import Benefits from '@/components/Benefits';
import BoostRevenue from '@/public/assets/icons/benefits-icons/Boost-revenue';


function Page() {

  const benefits = [
    {
      title: "Boost Revenue",
      description: "Attract and retain customers and unlock new revenue streams with Relyon.",
      icon: <BoostRevenue  />
    },
    {
      title: "Elevate Customer Engagement",
      description: "Keep your clients informed and engaged with real-time alerts and monitoring.",
      icon: <BoostRevenue  />
    },
    {
      title: "Reduce Costs with Automation",
      description: "Automate routine tasks and allow your team to focus on critical activities.",
      icon: <BoostRevenue  />
    },
    {
      title: "Instant Support and Assistance",
      description: "Ensure immediate assistance with SOS alerts, video calls and chat features.",
      icon: <BoostRevenue  />
    },
    {
      title: "Scalable and Seamless Integration",
      description: "Easily integrate Relyon's solutions with your existing systems.",
      icon:<BoostRevenue  />
    }
  ]

  return (
    <Benefits
        title="Benefits of working with Relyon"
        // icons={[<BoostRevenue />, <CustomerEngagement /> , <Automation />  , <Automation />  , <Automation /> ]}
        benefits={benefits}
      />
  )
}

export default Page