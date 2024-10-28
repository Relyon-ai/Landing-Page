import Image from 'next/image'

interface FounderProps {
  name: string
  title: string
  description: string
  imageSrc: string
}

const FounderCard = ({ name, title, description, imageSrc }: FounderProps) => (
  <div className="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col items-center text-center">
    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-teal-500">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{title}</p>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
)

export default function FoundingTeam({ founderImage1 = "/placeholder.svg", founderImage2 = "/placeholder.svg" }: { founderImage1?: string, founderImage2?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Founding Team</h2>
      <div className="grid md:grid-cols-2 gap-8">
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
  )
}


