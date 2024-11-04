interface InfoSectionProps {
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  description3: string;
  phone1Src: string;
  phone2Src: string;
  phone3Src: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ 
  title1, 
  title2, 
  description1, 
  description2, 
  description3,
  phone1Src,
  phone2Src,
  phone3Src
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <p className=" text-xl leading-relaxed">
              {description1}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={phone1Src} 
              alt="Phone display 1" 
              className="w-64 mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="w-full md:w-1/2">
            <img 
              src={phone2Src} 
              alt="Phone display 2" 
              className="w-64 "
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {title1}
            </h2>
            <p className="text-xl leading-relaxed">
              {description2}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {title2}
            </h2>
            <p className="text-xl leading-relaxed">
              {description3}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={phone3Src} 
              alt="Phone display 3" 
              className="w-64 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;