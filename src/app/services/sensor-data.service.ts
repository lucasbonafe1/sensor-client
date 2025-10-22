import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SensorData } from '../models/sensor-data';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather-data';

@Injectable({
  providedIn: 'root' 
})
export class SensorDataService {
  getUrl() : string{
    return environment.SENSOR_API_BASE_URL;
  }

  constructor(private http: HttpClient) {}

  getSensors(): Observable<SensorData[]> {
    return this.http.get<any[]>(`${this.getUrl()}/alerts`).pipe(
      map(dataArray => dataArray.map(data => new SensorData(data)))
    );
  }

  getSensorByState(state: string): Observable<SensorData> {
    return this.http.get<any>(`${this.getUrl()}/alert/${state}`).pipe(
      map(data => new SensorData(data))
    );
  }

  getWeatherDataByState(state: string, days: number): Observable<WeatherData> {
    return this.http.get<any>(`${this.getUrl()}/weather-data?state=${state}&days=${days}`).pipe(
      map(data => new WeatherData(data))
    );
  }

  createSensorForecast(state: string, days: number): Observable<SensorData> {
    return this.http.post<any>(`${this.getUrl()}/alert/verify?state=${state}&days=${days}`, null).pipe(
      map(data => new SensorData(data))
    );
  }
  // estudos: Observable é utilizado para processar dados assincronos
}