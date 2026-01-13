'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Weather } from './components/weather';
import { Jira } from './components/ai_tools/Jira';
import { Momentus } from './components/ai_tools/Momentus';
import LottiePlayer from './components/LottiePlayer';

export default function Page() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    sendMessage({ text: input });
    setInput('');
    setShowLottie(false);
  };


  const [showLottie, setShowLottie] = useState(true);

 type WeatherProps = {
  currentTemperature?: number;
  currentWeather?: string;
  location: string;
  highTemp?: number;
  lowTemp?: number;
};

type JiraProps = {
  link: string;
  imageLink: string;
}

type MomentusProps = {
  link: string;
  imageLink: string;
}

  return (
    <div className="chat-container flex flex-col h-full max-w-lg mx-auto pt-18">

      <div className={`flex justify-center items-center mb-4 transition-opacity duration-1000 ease-in-out ${
        showLottie ? 'opacity-100' : 'opacity-0 h-0'
      }`}>
        <LottiePlayer 
          className="w-2/3" 
          path="/ai_animation.json" 
        />
      </div>

    <div className='shadow-md p-4 rounded-lg '>
      <div className="chat-messages flex-1 overflow-y-auto space-y-4 mb-4 ">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message p-3 rounded-lg ${
              message.role === 'user'
                ? 'bg-white-100 self-end text-right'
                : 'bg-gray-100 self-start text-left'
            }`}
          >
            <div className="message-role font-semibold mb-1">
              {message.role === 'user' ? 'User:' : (
                <img
                  src="/powerhouse_logo.png" 
                  alt="AI"
                  className="h-5 w-5 inline-block"
                />
              )}
            </div>

            <div className="message-content space-y-2">

              {/* Here the conditional tools */}
              {message.parts.map((part, index) => {
                if (part.type === 'text') {
                  return (
                    <span key={index} className="block text-gray-800">
                      {part.text}
                    </span>
                  );
                }

                if (part.type === 'tool-displayWeather') {
                  switch (part.state) {
                    case 'input-available':
                      return (
                        <div key={index} className="text-sm text-gray-500">
                          Loading weather...
                        </div>
                      );

                    case 'output-available':
                      return (
                        <div key={index} className="weather-widget">
                          <Weather {...(part.output as WeatherProps)} />
                        </div>
                      );

                    case 'output-error':
                      return (
                        <div key={index} className="text-red-600 text-sm">
                          Error: {part.errorText}
                        </div>
                      );

                    default:
                      return null;
                  }
                }

                if (part.type === 'tool-displayJira') {
                  switch (part.state) {
                    case 'input-available':
                      return (
                        <div key={index} className="text-sm text-gray-500">
                          Loading Jira...
                        </div>
                      );

                    case 'output-available':
                      return (
                        <div key={index} className="weather-widget">
                          <Jira {...(part.output as JiraProps)} />
                        </div>
                      );

                    case 'output-error':
                      return (
                        <div key={index} className="text-red-600 text-sm">
                          Error: {part.errorText}
                        </div>
                      );

                    default:
                      return null;
                  }
                }

                if (part.type === 'tool-displayMomentus') {
                  switch (part.state) {
                    case 'input-available':
                      return (
                        <div key={index} className="text-sm text-gray-500">
                          Loading Momentus...
                        </div>
                      );

                    case 'output-available':
                      return (
                        <div key={index} className="weather-widget">
                          <Momentus {...(part.output as MomentusProps)} />
                        </div>
                      );

                    case 'output-error':
                      return (
                        <div key={index} className="text-red-600 text-sm">
                          Error: {part.errorText}
                        </div>
                      );

                    default:
                      return null;
                  }
                }

                return null;
              })}

            </div>
          </div>
        ))}
      </div>

      <div className="pb-4 flex items-center gap-2">
        <img
          src="/powerhouse_logo.png"  // same path as before
          alt="Assisted Digital"
          className="h-5 w-5 flex-shrink-0"
        />
        <span>Assisted Digital</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="chat-input flex items-center gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you want to do today..."
          className="flex-1 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  );
}