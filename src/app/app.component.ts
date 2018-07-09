import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.8';
  systemDescrip = 'Validación del formulario';
  temas = ['Angular', 'React', 'VueJs'];
  temaTieneError = true;
  userModel = new User('Rob', 'rob@test.com', 584169295877, 'default', 'mañana', true);

  validarTema(value) {
    if (value === 'default') {
      this.temaTieneError = true;
    } else {
      this.temaTieneError = false;
    }
  }
}
