import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.4';
  systemDescrip = 'Supervisar el estado y validaciones de los campos del formulario';
  temas = ['Angular', 'React', 'VueJs'];

  userModel = new User('Rob', 'rob@test.com', 584169295877, '', 'mañana', true);
}
