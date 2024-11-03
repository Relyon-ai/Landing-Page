import React from 'react';

import InThePress from '@/components/In-The-Press';
import SecurityServices from '@/components/Pic-description';
import Poster from '@/components/Poster';
import ContactForm from '@/components/RequestDemoAndWorkForm';
import Testimonials from '@/components/testimonials';

import pic from '../../../../../../public/assets/images/poster-images/womanPic.png';

function Page() {
  const valueProps = [
    {
      title: '',
      description:
        'Our journey began with a hackathon named after Michal Sela, a social worker who was tragically murdered by her husband in front of their infant daughter. Michal experienced an abusive relationship without realizing her life was in danger. Relyon was founded after winning the hackathon established by the Michal Sela Forum, which seeks technological solutions to domestic violence.',
    },
    {
      title: '',
      description:
        'Today, Relyon protects hundreds of women in abusive situations, partnering with organizations to provide the most professional services for these women.',
    },
    {
      title: '',
      description:
        'We offer free licenses annually to nonprofits that meet our criteria. To leave your details and check eligibility, ',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Poster
        backgroundImage={pic.src}
        isDark
        title="Making a difference with Relyon"
        description="At Relyon, we are committed to creating a safer world through innovation and technology. Our solutions not only enhance personal safety but also contribute to social impact by addressing critical issues faced by individuals and communities."
        button1Link="/"
        button1Text="Join us in making a difference"
      />
      <SecurityServices
        title="Our Story"
        valueProps={valueProps}
        isReversed={false}
        imageSrcs={['aaaa']}
        textSizeColor={['2xl', 'black']}
        clickHere
      />
      <div className="flex flex-col items-center bg-[#F2F5F6]">
        <Testimonials
          buttons={false}
          title="How Relyon keeps them safe"
          headline="FROM OUR USERS"
        />
        <InThePress title="OUR PARTNERS" bgColor="bg-white" />
        <ContactForm isRequestingADemo={false} formColor="white" />
      </div>
    </div>
  );
}

export default Page;
