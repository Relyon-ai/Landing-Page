import React from 'react';

import FoundingTeam from '@/components/Founding-Team';
import InThePress from '@/components/In-The-Press';
import SecurityServices from '@/components/Pic-description';
import Poster2 from '@/components/Poster2';
import ContactForm from '@/components/RequestDemoAndWorkForm';


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
    <>
      <Poster2 />
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center bg-[#f2f5f6]">
        <SecurityServices
          title="Our Story"
          clickHere
          valueProps={valueProps}
          textSizeColor={['text-black', 'text-xl']}
          isGray
        />
      </div>
      <FoundingTeam />
      <InThePress />

      <div className="flex items-center justify-center ">
        <ContactForm isRequestingADemo={false} />
      </div>
    </>
  );
}

export default Page;
