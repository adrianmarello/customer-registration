import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/features/auth/shared/entities/user.entity';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private localStorageService: LocalStorageService, private router: Router, private spinner: NgxSpinnerService) { }

  login(user: User): Promise<User | false> {
    var promise = new Promise<User | false>((resolve, reject) => {
      this.spinner.show()
      setTimeout(() => {
        let users = this.localStorageService.get('users')
        let findUser = users.find((u: User) => (u.username === user.username) && (u.password === user.password))
        if (findUser) {
          this.localStorageService.set('access_token', 'hfk7D_83JF-fJ2sj2')
          resolve(findUser);
        } else {
          reject();
        }
        this.spinner.hide()
      }, 1000);
    });
    return promise;
    
  }

  logout(): void {
    this.localStorageService.remove('access_token');
    this.router.navigate(['/auth/login']);
  }

}
