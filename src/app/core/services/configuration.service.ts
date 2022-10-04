import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    constructor(private localStorageService: LocalStorageService) {}
    
    load() {
        // Creamos nuestro usuario admin antes que todo
        this.localStorageService.set('users', [{username: 'admin', password: 'admin'}])
    }
}
