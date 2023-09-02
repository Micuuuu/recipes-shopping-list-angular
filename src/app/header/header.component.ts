import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onTabChange = new EventEmitter<string>();

  changeTabContent(content: string) {
    this.onTabChange.emit(content);
  }
}
