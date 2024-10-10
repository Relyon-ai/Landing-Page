// import React, { ReactNode } from 'react';
// import { Card, CardContent } from "@/components/ui/card";

// interface Benefit {
//   title: string;
//   description: string;
// }

// interface BenefitsProps {
//   title: string;
//   icons: ReactNode[]; 
//   benefits: Benefit[];
// }

// export default function Benefits({ title, icons, benefits }: BenefitsProps) {
//   return (
//     <div className="w-full max-w-4xl mx-auto px-[5%] py-[2%]">
//       <h2 className="text-3xl font-bold text-center mb-[2%]">{title}</h2>
//       <div className="grid gap-[2%]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%]">
//           {benefits.slice(0, 3).map((benefit, index) => (
//             <Card key={index} className="w-full overflow-hidden">
//               <CardContent className="h-full flex flex-col justify-center items-center text-center p-[4%]">
//                 <div className="w-[30%] h-[30%] mb-[5%] flex items-center justify-center">
//                   {icons[index]}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-[3%]">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         <div className="flex justify-center gap-[2%] mt-[2%]">
//           {benefits.slice(3).map((benefit, index) => (
//             <Card key={index + 3} className="w-full aspect-square md:w-[30%] overflow-hidden">
//               <CardContent className="h-full flex flex-col justify-center items-center text-center p-[4%]">
//                 <div className="w-[30%] h-[30%] mb-[5%] flex items-center justify-center">
//                   {icons[index + 3]}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-[3%]">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type BenefitsDisplayProps = {
  title: string;
  benefits: Benefit[];
};

const BenefitCard = ({ icon, title, description }: Benefit) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center aspect-square">
    <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function BenefitsDisplay({ title, benefits }: BenefitsDisplayProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
}