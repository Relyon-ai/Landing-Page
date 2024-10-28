import FoundingTeam from '@/components/Founding-Team'
import InThePress from '@/components/In-The-Press'

import React from 'react'

import pic2 from '../../../../../../public/assets/images/poster-images/2368685235d8ce4cf6be9c3140f3254e.jpeg'

function Page() {
  return (
    <>
      <FoundingTeam  />
      <InThePress imageUrls={[pic2.src]}/>
    </>
  )
}

export default Page
