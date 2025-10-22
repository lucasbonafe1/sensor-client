import { Component, Input } from '@angular/core';
import { WeatherData } from '../../models/weather-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modal-weather-data',
  imports: [CommonModule],
  templateUrl: './modal-weather-data.component.html',
  styleUrl: './modal-weather-data.component.css'
})
export class ModalWeatherDataComponent {
  @Input() weather?: WeatherData;
}
