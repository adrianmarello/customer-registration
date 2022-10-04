import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
    selector: 'cap-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

    constructor(private loginService: LoginService) {
        // Llamamos al método logout de nuestro servicio de login
        // Como es lo único que tiene que hacer este componente me parecio correcto llamarlo en el constructor
        // También podria haber llamado directamente al método al presionar el boton de "Cerrar Sesión" en el header
        this.loginService.logout()
    }

}
