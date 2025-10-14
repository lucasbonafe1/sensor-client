import { Component } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sensorState: string = '';

  constructor(private sensorService: SensorDataService) {}

  onSearch(state: string) {
    this.sensorState = state;

    this.sensorService.getSensorByState(state).subscribe(data => {
      console.log('Sensor data for state:', state, JSON.stringify(data, null, 2));
    });
  } 
}
