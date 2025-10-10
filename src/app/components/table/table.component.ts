import { Component } from '@angular/core';
import { SensorDataService } from '../../services/sensor-data.service';
import { SensorData } from '../../models/sensor-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  sensores: SensorData[] = [];

  constructor(private sensorService: SensorDataService) {
    this.sensorService.getSensors().subscribe(data => {
      this.sensores = data;
    });
  }
}
