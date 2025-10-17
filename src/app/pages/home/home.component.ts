import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
