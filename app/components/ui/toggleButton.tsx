'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ToggleButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isToggled, setIsToggled] = useState(false);

  // Set initial state based on current page
  useEffect(() => {
    if (pathname === '/gui') {
      setIsToggled(true);
    } else if (pathname === '/landing') {
      setIsToggled(false);
    }
  }, [pathname]);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    
    if (newState) {
      router.push('/gui');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
      <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 select-none transition-all duration-300 ${
        !isToggled ? 'font-bold translate-y-0 scale-100' : 'font-normal translate-y-1 scale-95 opacity-75'
      }`}>
        AI
      </span>
      
      <button
        className="relative w-16 h-10 bg-gray-200 dark:bg-gray-700 rounded-2xl p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={handleToggle}
      >
        <div
          className={`w-8 h-8 bg-white dark:bg-gray-200 rounded-xl shadow-md transition-transform duration-300 transform ${
            isToggled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      
      <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 select-none transition-all duration-300 ${
        isToggled ? 'font-bold translate-y-0 scale-100' : 'font-normal translate-y-1 scale-95 opacity-75'
      }`}>
        UI
      </span>
    </div>
  );
}
