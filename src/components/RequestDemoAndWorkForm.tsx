import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormProps {
  isRequestingADemo: boolean;
  title?: string;
  description?: string;
  formColor?: string;
}

export default function ContactForm({
  isRequestingADemo,
  title,
  description,
  formColor = 'gray-100',
}: ContactFormProps) {
  const formTitle = isRequestingADemo ? 'Request a demo' : 'Work with us';
  const buttonText = isRequestingADemo ? 'Request a demo' : 'Submit';

  return (
    <div className="flex lg:h-screen w-[74%] flex-col items-center justify-center md:flex-row">
      <div className="mx-6 flex-1 py-14">
        <h2 className="mb-4 text-3xl font-bold">{title || formTitle}</h2>
        <p className="text-gray-600">
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        </p>
      </div>
      <div className={`flex-1 ${formColor} rounded-2xl`}>
        <form className={`rounded-lg p-6`}>
          <div className={`mb-4 grid grid-cols-2 gap-4 `}>
            <Input placeholder="First name *" required className="bg-white " />
            <Input placeholder="Last name" className="bg-white" />
            <Input
              type="email"
              placeholder="Work email *"
              required
              className="bg-white"
            />
            <Input type="tel" placeholder="Phone number" className="bg-white" />
            <Input placeholder="Company name" className="bg-white" />
            <Select>
              <SelectTrigger className="text-gray-500">
                <SelectValue placeholder="Company type *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                <SelectItem value="agency">Agency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            placeholder="Anything else you want to share?"
            className="mb-4"
          />
          <div className="mt-6 flex items-center justify-center">
            <Button variant="cta" className="px-20">
              {buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
