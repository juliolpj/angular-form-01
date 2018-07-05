import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.4';
  systemDescrip = 'Enlazar datos a un modelo';
  temas = ['Angular', 'React', 'VueJs'];

  userModel = new User('Rob', 'rob@test.com', 584169295877, '', 'mañana', true);
}
