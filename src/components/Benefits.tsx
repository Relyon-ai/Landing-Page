import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type BenefitsDisplayProps = {
  title: string;
  benefits: Benefit[];
};

function BenefitsDisplay({ title, benefits }: BenefitsDisplayProps) {
  return (
    <div className="mx-auto w-full max-w-5xl bg-[#F2F5F6] px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {benefits.slice(0, 3).map((benefit) => (
          <div key={uuidv4()} className="bg-white shadow-none">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 flex size-16 items-center justify-center text-teal-600">
                {benefit.icon}
              </div>
              <CardTitle className="text-center text-xl font-semibold">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">{benefit.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-6 grid grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
        {benefits.slice(3).map((benefit) => (
          <div key={uuidv4()} className="bg-white shadow-none">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 flex size-16 items-center justify-center text-teal-600">
                {benefit.icon}
              </div>
              <CardTitle className="text-center text-xl font-semibold">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">{benefit.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
}
function RoundedBenefitsDisplay({ title, benefits }: BenefitsDisplayProps) {
  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {benefits.map((benefit) => (
          <Card
            key={uuidv4()}
            className="rounded-lg border border-gray-200 shadow-sm"
          >
            <CardHeader className="flex flex-col items-center space-y-2 p-4">
              <div className="flex size-16 items-center justify-center text-teal-600">
                {benefit.icon}
              </div>
              <CardTitle className="text-center text-lg font-semibold">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 text-center text-sm text-gray-600">
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export { BenefitsDisplay, RoundedBenefitsDisplay };
