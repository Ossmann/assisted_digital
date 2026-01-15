'use client';

type MoxoProps = {
  link: string;
  imageLink: string;
};

export const Moxo = ({ link }: MoxoProps) => {
  return (
    <div className="min-h-[200px] bg-gray-100 p-4 rounded-xl shadow-md max-w-md mx-auto flex flex-col items-center justify-center space-y-4">
      {/* Logo above text */}
      <img 
        src="/Moxo.jpeg"
        alt="Moxo icon"
        className=" h-40 rounded-lg"
      />

      {/* Link with inline external icon */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-2"
      >
        <span>Go to the academy platform</span>
        {/* External link icon (using Heroicons or similar) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H21m0 0v7.5M21 3l-9.75 9.75M6 6v12a2.25 2.25 0 002.25 2.25h12" />
        </svg>
      </a>
    </div>
  );
};

