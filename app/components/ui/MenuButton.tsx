"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MenuButtonProps = {
  iconUrl: string;
  iconAlt?: string;
  label: string;
  url?: string;
  onClick?: () => void;
};

export default function MenuButton({
  iconUrl,
  iconAlt,
  label,
  url,
  onClick,
}: MenuButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
    if (url) router.push(url);

    // Reset click effect
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex flex-col items-center justify-center cursor-pointer rounded-lg
        w-28 h-28 border border-gray-800 bg-white p-2
        transition-colors transition-transform duration-300 ease-in-out
        hover:bg-gray-500/50 hover:scale-105
        ${isClicked ? "scale-95 bg-gray-400/70" : ""}
      `}
    >
      <div className="flex-grow flex items-center justify-center">
        <img
          src={iconUrl}
          alt={iconAlt || label}
          className="w-10 h-10 max-w-none object-contain"
        />
      </div>
      <div className="mt-1 font-bold text-center text-sm">
        {label}
      </div>
    </button>
  );
}
