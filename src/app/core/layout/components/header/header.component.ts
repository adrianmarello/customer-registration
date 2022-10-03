import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cmreg-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    userLogged: boolean = this.localStorageService.get('access_token') ? true : false;
    currentRoute: string = '';
    menuItems: Array<any> = [
        {name: 'Inicio', class: 'nav-link', route: '/home'},
        {name: 'Registración', class: 'nav-link', route: '/client/registration'}
    ]

    constructor(private route: Router, private localStorageService: LocalStorageService) { 
        this.route.events.subscribe((event: Event) => {
    
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
            }
    
            if (event instanceof NavigationError) {
                console.log(event.error);
            }
        });
    }
    
    ngOnInit(): void {}

}
