import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SensorData } from '../models/sensor-data';
import { SensorDataRequest } from '../models/sensor-data-request';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private apiUrl = 'http://localhost:8080/sensor'; // TODO: adicionar no enviroments

  constructor(private http: HttpClient) {}

  getSensors(): Observable<SensorData[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(dataArray => dataArray.map(data => new SensorData(data)))
    );
  }

  getSensorByState(state: string): Observable<SensorData> {
    return this.http.get<any>(`${this.apiUrl}/${state}`).pipe(
      map(data => new SensorData(data))
    );
  }

  createSensor(sensor: SensorDataRequest): Observable<SensorData> {
    return this.http.post<any>(this.apiUrl, sensor).pipe(
      map(data => new SensorData(data))
    );
  }

  // estudos: Observable é utilizado para processar dados assincronos
}