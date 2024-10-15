import SecurityServices from '@/components/Pic-description'
import ContactForm from '@/components/RequestDemoAndWorkForm'
import React from 'react'

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
    <div className='flex flex-col items-center'>
      <SecurityServices title='Our Story' valueProps={valueProps} isReversed={false} imageSrcs={["aaaa"]} textSizeColor={['2xl','black' ]} clickHere={true}/>
      <div className='bg-[#F2F5F6] flex flex-col items-center'>
        <ContactForm isRequestingADemo={false} formColor='white'/>
      </div>
    </div>

  )
}


export default Page