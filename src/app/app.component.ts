import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tab:string = 'recipes';

  updateContent(content:any){
    this.tab  = content;
  }
}
