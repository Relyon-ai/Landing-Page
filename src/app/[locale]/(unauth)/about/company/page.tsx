import FoundingTeam from '@/components/Founding-Team'
import InThePress from '@/components/In-The-Press'

import React from 'react'

import Poster2 from '@/components/Poster2'
import SecurityServices from '@/components/Pic-description'
import ContactForm from '@/components/RequestDemoAndWorkForm'

function Page() {

  const valueProps = [
    {
      title: "",
      description: "Our journey began with a hackathon named after Michal Sela, a social worker who was tragically murdered by her husband in front of their infant daughter. Michal experienced an abusive relationship without realizing her life was in danger. Relyon was founded after winning the hackathon established by the Michal Sela Forum, which seeks technological solutions to domestic violence."
    },
    {
      title: "",
      description: "Today, Relyon protects hundreds of women in abusive situations, partnering with organizations to provide the most professional services for these women."
    },
    {
      title: "",
      description: "We offer free licenses annually to nonprofits that meet our criteria. To leave your details and check eligibility, "
    },
    
  ]
  return (
    <>
      <Poster2 />
      <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
    <div className='flex justify-center items-center bg-[#f2f5f6]'>

      <SecurityServices title='Our Story' clickHere={true} valueProps={valueProps} textSizeColor={["black" , "xl"]} isGray={true} />
    </div>
      <FoundingTeam  />
      <InThePress />

    <div className='flex justify-center items-center '>
      <ContactForm isRequestingADemo={false} />
</div>
    </>
  )
}

export default Page
