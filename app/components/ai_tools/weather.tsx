'use client';

type WeatherProps = {
  currentTemperature?: number;
  currentWeather?: string;
  location: string;
  highTemp?: number;
  lowTemp?: number;
};

export const Weather = ({
  currentTemperature,
  currentWeather = 'Clear',
  location,
  highTemp,
  lowTemp,
}: WeatherProps) => {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-blue-400 via-sky-300 to-orange-300 p-6 rounded-3xl shadow-2xl max-w-md mx-auto relative overflow-hidden">
      {/* Location Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">{location}</h2>
        <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
          📍
        </div>
      </div>

      {/* Current Weather Only - Full Focus */}
      <div className="text-center flex flex-col items-center justify-center h-[300px]">
        <div className="text-7xl font-black text-white drop-shadow-2xl mb-4">
          {currentTemperature}°
        </div>
        <div className="text-3xl mb-4">
          {getWeatherIcon(currentWeather)}
        </div>
        <p className="text-2xl text-white/90 capitalize tracking-wide mb-6">{currentWeather}</p>
        {highTemp && lowTemp && (
          <p className="text-xl text-white/70">H: {highTemp}° L: {lowTemp}°</p>
        )}
      </div>
    </div>
  );
};

// Simple icon mapper
const getWeatherIcon = (weather: string): string => {
  if (weather.toLowerCase().includes('sun')) return '☀️';
  if (weather.toLowerCase().includes('cloud')) return '☁️';
  if (weather.toLowerCase().includes('rain')) return '🌧️';
  return '🌤️';
};
