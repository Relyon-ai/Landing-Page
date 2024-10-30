import { useTranslations } from 'next-intl';
import React from 'react';

// Import your components
import ImpactComponent from '@/components/Difference';
import SecurityServices from '@/components/Pic-description';
import Poster from '@/components/Poster';
import ContactForm from '@/components/RequestDemoAndWorkForm';
import SecurityApp from '@/components/SmartphoneComponent';
import Testimonials from '@/components/testimonials';

import pic from '../../../../public/assets/images/poster-images/iStock-1338846217 3.png';

// Define an interface for the props
interface PageProps {
  messages: Record<string, string>; // Define the type for messages
}

async function loadMessages(locale: string): Promise<Record<string, string>> {
  try {
    // Dynamically import the messages based on the locale
    const messages = await import(`../../../messages/${locale}.json`);
    return messages.default; // Assuming your JSON exports the messages as default
  } catch (error) {
    console.error(`Error loading messages for locale: ${locale}`, error);
    return {}; // Return an empty object or handle the error as needed
  }
}

// Define the page component
const Page: React.FC<PageProps> = ({ messages }) => {
  const t = useTranslations();

  // Example of using messages if you have specific keys
  const someMessage = messages['someMessageKey']; // Replace 'someMessageKey' with an actual key

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
      <div>{someMessage}</div>
    </div>
  );
};

// Default export for the page
export default async function PageWrapper({ params }: { params: { locale: string } }) {
  const messages = await loadMessages(params.locale);

  return (
    <Page messages={messages} /> // Pass messages to the Page component
  );
}
