"use client";
import React, { useState } from "react";

import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
export default function Home() {
  const [data, setData] = useState({
    current: {
      wind_kph: 0,
      humidity: 0,
      wind_dir: "",
      pressure_mb: 0,
      feelslike_c: 0,
      vis_km: 0,

      condition: {
        icon: "",
        text: "",
      },
      temp_c: 0,
    },
    location: {
      name: "",
      region: "",
      country: "",
    },
    forecast: {
      forecastday: [],
    },
  });
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearched(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({
          current: {
            wind_kph: 0,
            humidity: 0,
            wind_dir: "",
            pressure_mb: 0,
            feelslike_c: 0,
            vis_km: 0,

            condition: {
              icon: "",
              text: "",
            },
            temp_c: 0,
          },
          location: {
            name: "",
            region: "",
            country: "",
          },
          forecast: {
            forecastday: [],
          },
        });
      }
    }
  };
  let content;
  console.log(error);
  if (searched === false && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-20">
        <h2 className="text-2xl font-bold mb-4">Welcome to MDG WEATHER</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-20">
        <p className="text-2xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }
  return (
    <>
      <div className=" bg-cover bg-gradient-to-r from-sky-700 to-sky-500 min-h-screen max-h-fit">
        <div className=" bg-white/25 w-full flex flex-col h-fit">
          <div className="flex flex-col justify-between items-center p-12 md:flex-row">
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 italic weight font-bold text-xl">
              MDG WEATHER
            </h1>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
