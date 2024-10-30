import { useTranslations } from 'next-intl';
import React from 'react';

import ImpactComponent from '@/components/Difference';
import SecurityServices from '@/components/Pic-description';
import Poster from '@/components/Poster';
import ContactForm from '@/components/RequestDemoAndWorkForm';
import SecurityApp from '@/components/SmartphoneComponent';
import Testimonials from '@/components/testimonials';

import pic from '../../../../public/assets/images/poster-images/iStock-1338846217 3.png';

function Page() {
  const t = useTranslations();
  const valueProps = [
    {
      title: t('VoiceActivation.title'),
      description: t('VoiceActivation.description'),
    },
    {
      title: t('RealTimeTracking.title'),
      description: t('RealTimeTracking.description'),
    },
    {
      title: t('InstantAlerts.title'),
      description: t('InstantAlerts.description'),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Poster
        isDark
        backgroundImage={pic.src}
        title={t('HomePoster.title')}
        description={t('HomePoster.description')}
        button1Text={t('HomePoster.button1Text')}
        button1Link="/home"
        button2Text={t('HomePoster.button2Text')}
        button2Link="/home"
      />
      <SecurityServices
        headline={t('SecurityServices.headline')}
        title={t('SecurityServices.title')}
        valueProps={valueProps}
        isReversed={false}
        imageSrcs={['aaaa', 'bbbb']}
        buttonText1={t('SecurityServices.buttonText1')}
        buttonText2={t('SecurityServices.buttonText2')}
      />
      <SecurityApp
        direction
        primaryButtonText={t('SecurityApp.primaryButtonText')}
        valueProps={valueProps}
      />
      <Testimonials />
      <ImpactComponent />
      <ContactForm isRequestingADemo />
    </div>
  );
}

// Example of getStaticProps for Next.js
export async function getStaticProps({ locale }: { locale: string }) {
  // Load messages based on the locale
  const messages = await import(`../../../../messages/${locale}.json`);

  return {
    props: {
      messages,
    },
  };
}

export default Page;
