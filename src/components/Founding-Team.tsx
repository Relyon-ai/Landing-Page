import Image from 'next/image';

interface FounderProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const FounderCard = ({ name, title, description, imageSrc }: FounderProps) => (
  <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-6 text-center">
    <div className="mb-4 size-24 overflow-hidden rounded-full border-2 border-teal-500">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
    <h3 className="mb-2 text-xl font-bold">{name}</h3>
    <p className="mb-4 text-gray-600">{title}</p>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default function FoundingTeam({
  founderImage1 = '/placeholder.svg',
  founderImage2 = '/placeholder.svg',
}: {
  founderImage1?: string;
  founderImage2?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Our Founding Team
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <FounderCard
          name="Lee Sharir"
          title="Founder & CEO"
          description="Tell a bit about yourself... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imageSrc={founderImage1}
        />
        <FounderCard
          name="Lotan Horev"
          title="Founder & CTO"
          description="Tell a bit about yourself... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imageSrc={founderImage2}
        />
      </div>
    </div>
  );
}
