import { Component } from '@angular/core';
import { User } from './user';
import { InscripcionService } from './inscripcion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.9';
  systemDescrip = 'Enviar los datos del formulario';
  temas = ['Angular', 'React', 'VueJs'];
  temaTieneError = true;
  userModel = new User('Rob', 'rob@test.com', 584169295877, 'default', 'mañana', true);

  constructor(private _InscripcionService: InscripcionService) {
  }

  validarTema(value) {
    if (value === 'default') {
      this.temaTieneError = true;
    } else {
      this.temaTieneError = false;
    }
  }

  onSubmit() {
    this._InscripcionService.inscribir(this.userModel)
    .subscribe(
        data => console.log('Succes !', data),
        error => console.error('Error !', error)
      );
  }

}
