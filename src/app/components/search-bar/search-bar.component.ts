import { Component, EventEmitter, Output } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { WeatherData } from '../../models/weather-data';

@Component({
  selector: 'search-bar',
  imports: [],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private sensorService: SensorDataService) { }

   @Output() weatherFound = new EventEmitter<WeatherData>();

  searchSensor(state: string) {
    this.sensorService.getWeatherDataByState(state, 1).subscribe(data => {
      this.weatherFound.emit(data);
    });
  }
}
