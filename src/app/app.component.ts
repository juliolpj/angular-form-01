import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.3';
  systemDescrip = 'Enlazar datos con ngForm';
  temas = ['Angular', 'React', 'VueJs'];
}
