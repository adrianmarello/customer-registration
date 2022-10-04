import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
    selector: 'cmreg-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

    userLogged: boolean = this.localStorageService.get('access_token');
    currentRoute: string = '';
    menuItems: Array<any> = [
        { name: 'Inicio', class: 'nav-link', route: '/home', icon: 'bi bi-house-door' },
        { name: 'Registro', class: 'nav-link', route: '/client/registration', icon: 'bi bi-file-text' }
    ]

    constructor(private route: Router, private localStorageService: LocalStorageService) { 
        // Me suscribo a los eventos del Router para obtener la url actual y según eso agregar la clase "active" a los links
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
