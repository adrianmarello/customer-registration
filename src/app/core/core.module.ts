import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { LayoutModule } from './layout/layout.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  providers: [LocalStorageService, LoginService]
})
export class CoreModule { }
