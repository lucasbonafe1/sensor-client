import { Component, Input } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { SensorDataService } from '../../../services/sensor-data.service';
import { SensorData } from '../../../models/sensor-data';

@Component({
  selector: 'app-table-alerts',
  imports: [TableComponent],
  templateUrl: './table-alerts.component.html',
  styleUrl: './table-alerts.component.css'
})
export class TableAlertsComponent {
  sensores!: SensorData[];

  constructor(private sensorService: SensorDataService) {}

  ngOnInit() {
    this.sensorService.getSensors().subscribe(data => {
        this.sensores = data;
    });
  }
}
