import { useTranslations } from 'next-intl';
import React from 'react';

import Poster from '@/components/Poster';
import ContactForm from '@/components/RequestDemoAndWorkForm';
import SecurityApp from '@/components/SmartphoneComponent';

import pic from '../../../../../public/assets/images/poster-images/iStock-1338846217 3.png';

function Page() {
  const t = useTranslations();

  return (
    <div>
      <Poster
        isDark
        backgroundImage={pic.src}
        title={t('HomePoster.title')}
        description={t('HomePoster.description')}
        button1Text={t('HomePoster.button1Text')}
        button1Link="/home"
        button2Text={t('HomePoster.button2Text')}
      />
      <ContactForm isRequestingADemo={false} />
      <SecurityApp direction primaryButtonText="aaa" />
    </div>
  );
}

export default Page;
