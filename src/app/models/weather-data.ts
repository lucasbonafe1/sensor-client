export class WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };

  current: {
    temp_c: number;
    condition: {
      icon: string;
    };
    wind_mph: number;
    humidity: number;
    precip_mm: number;
  };

  forecast: {
    forecastday: {
      date: number;
      day: {
        maxtempC: number | null;
        mintempC: number | null;
        maxwindMph: number | null;
        totalprecipMm: number | null;
        avghumidity: number;
      };
    }[];
  };

  constructor(data: any) {
    this.location = {
      name: data.location?.name || "",
      region: data.location?.region || "",
      country: data.location?.country || "",
      lat: data.location?.lat || 0,
      lon: data.location?.lon || 0,
      tz_id: data.location?.tz_id || "",
      localtime_epoch: data.location?.localtime_epoch || 0,
      localtime: data.location?.localtime || "",
    };

    this.current = {
      temp_c: data.current?.temp_c || 0,
      condition: {
        icon: data.current?.condition?.icon || "",
      },
      wind_mph: data.current?.wind_mph || 0,
      humidity: data.current?.humidity || 0,
      precip_mm: data.current?.precip_mm || 0,
    };

    this.forecast = {
      forecastday: (data.forecast?.forecastday || []).map((f: any) => ({
        date: f.date || 0,
        day: {
          maxtempC: f.day?.maxtempC ?? null,
          mintempC: f.day?.mintempC ?? null,
          maxwindMph: f.day?.maxwindMph ?? null,
          totalprecipMm: f.day?.totalprecipMm ?? null,
          avghumidity: f.day?.avghumidity || 0,
        },
      })),
    };
  }
}
