import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
    selector: 'cap-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

    constructor(private loginService: LoginService) {
        this.loginService.logout()
    }

}
