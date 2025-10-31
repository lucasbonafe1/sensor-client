import { Component, Input } from '@angular/core';
import { SensorData } from '../../models/sensor-data';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() alerts!: SensorData[];

  dateFormatConverter(date: Date): string {
    const datepipe: DatePipe = new DatePipe('pt-BR')
    let formattedDate = datepipe.transform(date, 'dd/MM/yyyy HH:mm:ss')
    return formattedDate ?? '';
  }
}
