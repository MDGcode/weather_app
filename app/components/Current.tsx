import React from "react";
import { getCurrentDate } from "../utils/currentDate";
import { ImLocation } from "react-icons/im";

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <>
      <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl text-white">Today</h1>
            <p className="text-white">{currentDate}</p>
          </div>
          {weatherIcon && (
            <div>
              <img
                className=" w-auto object-cover h-auto"
                src={weatherIcon}
                alt={data.current.condition.text}
              />
            </div>
          )}
        </div>
        <div>
          <p className=" text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>
              °<sup className=" inset-y-1/4">C</sup>
            </span>
          </p>
          <span className="text-white">{data.current.condition.text}</span>
        </div>
        <div>
          <div className=" flex items-center text-black bg-white/90 p-2 rounded-xl text-2xl mx-4">
            <ImLocation size={40} />
            <span>
              {data.location.name}, {data.location.region},{" "}
              {data.location.country}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
