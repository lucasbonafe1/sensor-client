import { Component } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';

@Component({
  selector: 'search-bar',
  imports: [],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private sensorService: SensorDataService) { }

  searchSensor(state: string) {
    var returnSensor = this.sensorService.getSensorByState(state)

    returnSensor.subscribe(data => {
      console.log(data);
    });
  }
}
