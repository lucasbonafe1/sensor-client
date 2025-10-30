import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  imports: [],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    const val = value ?? '';
    this.search.emit(val);
  }
}
