interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}
interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
        {data.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
          >
            <p>
              {new Date(day.date).toLocaleDateString("en-GB", {
                weekday: "short",
              })}
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>
                MAX {day.day.maxtemp_c.toFixed()}
                <span>
                  °<sup className=" inset-y-1/4">C</sup>
                </span>
              </p>
              <p>
                MIN {day.day.mintemp_c.toFixed()}
                <span>
                  °<sup className=" inset-y-1/4">C</sup>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekForecast;
