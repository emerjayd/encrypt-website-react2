import React from 'react';
import Image from 'next/image';
import software from './software/page';
const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center max-md:flex-col items-center text-white text-left min-w-[150px] min-h-[150px] w-full h-auto">
      <div className="p-1">
        <div className="max-w-[400px] overflow-hidden">
          <div className="overflow-hidden rounded-lg">
            <a href="/security">
                <Image
                  src="/security.png"
                  width={400} // Adjust the size as needed
                  height={300} // Adjust the size as needed
                  className="hover:scale-105 transition duration-700 cursor-pointer object-cover"
                  alt="Cybersecurity"
                />
            </a>
          </div>
        </div>
        <h2 className="py-1 text-xl">Cybersecurity</h2>
      </div>

      <div className="p-1">
        <div className="max-w-[400px] overflow-hidden">
          <div className="overflow-hidden rounded-lg">
            <a href="/cloud">
                <Image
                  src="/cloud.png"
                  width={400} // Adjust the size as needed
                  height={300} // Adjust the size as needed
                  className="hover:scale-105 transition duration-700 cursor-pointer object-cover"
                  alt="Cloud Services"
                />
            </a>
          </div>
        </div>
        <h2 className="py-1 text-xl">Cloud Services</h2>
      </div>

      <div className="p-1">
        <div className="max-w-[400px] overflow-hidden">
          <div className="overflow-hidden rounded-lg">
            <a href='/software'>
                <Image
                  src="/software.png"
                  width={400} // Adjust the size as needed
                  height={300} // Adjust the size as needed
                  className="hover:scale-105 transition duration-700 cursor-pointer object-cover"
                  alt="Software"
                />
            </a>
          </div>
        </div>
        <h2 className="py-1 text-xl">Software Development</h2>
      </div>
    </div>
  );
};

export default Home;
