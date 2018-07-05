import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.6';
  systemDescrip = 'Desplegar mensajes de error';
  temas = ['Angular', 'React', 'VueJs'];

  userModel = new User('', 'rob@test.com', 584169295877, '', 'mañana', true);
}
