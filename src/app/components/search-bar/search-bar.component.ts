import { Component, EventEmitter, Input, input, Output } from '@angular/core';
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
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    const val = value ?? '';
    this.search.emit(val);
  }
}
