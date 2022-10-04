import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    constructor(private localStorageService: LocalStorageService) { 
      this.localStorageService.set('users', [{username: 'admin', password: 'admin'}])
    }

    load() {
        console.log('Default admin user initialization');
    }
}
