import React from 'react';
import {Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-[#F2F5F6]">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.slice(0, 3).map((benefit, index) => (
          <div key={index} className="bg-white shadow-none">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-teal-600 mb-4">
                {benefit.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-center">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">{benefit.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:w-2/3 mx-auto">
        {benefits.slice(3).map((benefit, index) => (
          <div key={index} className="bg-white shadow-none">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-teal-600 mb-4">
                {benefit.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-center">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">{benefit.description}</p>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  )
}
function RoundedBenefitsDisplay({ title, benefits }: BenefitsDisplayProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <CardHeader className="flex flex-col items-center space-y-2 p-4">
              <div className="w-16 h-16 flex items-center justify-center text-teal-600">
                {benefit.icon}
              </div>
              <CardTitle className="text-lg font-semibold text-center">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-gray-600 px-4 pb-4">
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export  {BenefitsDisplay, RoundedBenefitsDisplay}