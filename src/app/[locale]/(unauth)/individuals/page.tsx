import Poster from '@/components/Poster';
import React from 'react';
import pic from '../../../../../public/assets/images/poster-images/Overview section (5).png'
function Page() {
  return( 
  <>
    <Poster backgroundImage={pic.src} description='aaa' isDark={false} title='aaa'  />
  </>
  ) 
  
}

export default Page;
