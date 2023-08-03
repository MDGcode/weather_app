import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl px-5">
              <h3>Feels like</h3>
              <h3>
                {data.current.feelslike_c}{" "}
                <span>
                  °<sup className=" inset-y-1/4">C</sup>
                </span>
              </h3>
            </div>
            <div className="text-5xl">
              <CiTempHigh />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{data.current.wind_kph} KM/H</h3>
            </div>
            <div className="text-5xl">
              <GiWindSlap />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Wind Direction</h3>
              <h3>{data.current.wind_dir}</h3>
            </div>
            <div className="text-5xl">
              <GiCompass />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl px-5">
              <h3>Humidity</h3>
              <h3>{data.current.humidity} %</h3>
            </div>
            <div className="text-7xl">
              <WiHumidity />
            </div>
          </div>
          {/**The last 2 boxes*/}
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl px-4">
              <h3>Air Pressure</h3>
              <h3>{data.current.pressure_mb} hPa</h3>
            </div>
            <div className="text-5xl">
              <MdAir />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl px-6">
              <h3>Visibility</h3>
              <h3>{data.current.vis_km} KM</h3>
            </div>
            <div className="text-5xl">
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
