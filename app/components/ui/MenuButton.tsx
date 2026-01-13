"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MenuButtonProps = {
  icon: React.ReactNode;
  label: string;
  url?: string;
  size?: number;
  onClick?: () => void;
};

export default function MenuButton({
  icon,
  label,
  url,
  size = 100,
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
      style={{ width: size, height: size }}
      className={`
        relative flex flex-col items-center justify-center cursor-pointer rounded
        border border-gray-800 bg-white p-2
        transition-colors transition-transform duration-300 ease-in-out
        hover:bg-gray-500/50 hover:scale-105
        ${isClicked ? "scale-95 bg-gray-400/70" : ""}
      `}
    >
      <div
        className="flex-grow flex items-center justify-center"
        style={{ fontSize: size / 2 }}
      >
        {icon}
      </div>
      <div
        className="mt-1 font-bold text-center"
        style={{ fontSize: size / 6 }}
      >
        {label}
      </div>
    </button>
  );
}
