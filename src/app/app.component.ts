import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, SearchBarComponent, TableComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sensor-client';
}
