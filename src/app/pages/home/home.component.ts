import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ModalWeatherDataComponent } from '../../components/modal-weather-data/modal-weather-data.component';
import { WeatherData } from '../../models/weather-data';

@Component({
  selector: 'app-home',
  imports: [FormsModule, SearchBarComponent, ModalWeatherDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weather?: WeatherData;

  onWeatherFound(data: WeatherData) {
    this.weather = data; // armazena o resultado vindo do search-bar
  }
}
