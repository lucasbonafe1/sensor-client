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

  constructor(private sensorService: SensorDataService) {}

  loadAlerts() : void {
    this.sensorService.getSensors().subscribe(data => {
        this.sensors = data;
    });
  }

  ngOnInit() {
    this.loadAlerts();  
  }

  search(state: string) {
    var sensorsSearched = new Array<SensorData>();
    
    if(state.length === 0){
      this.loadAlerts();
      return;
    }

    this.sensors.filter(sensor => {
      if(sensor.state.includes(state)){
        sensorsSearched.push(sensor);
      }
    });

    this.sensors = sensorsSearched;
  }
}
