import { Component, Input } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { SensorDataService } from '../../../services/sensor-data.service';
import { SensorData } from '../../../models/sensor-data';
import { SearchBarComponent } from '../../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-table-alerts',
  imports: [TableComponent, SearchBarComponent],
  templateUrl: './table-alerts.component.html',
  styleUrl: './table-alerts.component.css'
})
export class TableAlertsComponent {
  sensors!: SensorData[];
  sensorsAux!: SensorData[];

  constructor(private sensorService: SensorDataService) {}

  loadAlerts() : void {
    this.sensorService.getSensors().subscribe(data => {
        this.sensorsAux = data;
    });

    this.sensors = this.sensorsAux;
  }

  ngOnInit() {
    this.loadAlerts();  
  }

  search(state: string) {
    this.sensors = [];

    if(state.length === 0){
      this.sensors = this.sensorsAux;
      return;
    }

    this.sensorsAux.filter(sensor => {
      if(sensor.state.toLowerCase().includes(state.toLowerCase())){
        this.sensors.push(sensor);
      }
    });
  }
}
