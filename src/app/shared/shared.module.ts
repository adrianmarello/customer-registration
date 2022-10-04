import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

import { LayoutModule } from './layout/layout.module';
import { DniFormatPipe } from './pipes/dni-format.pipe';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

const SHARED = [
  DniFormatPipe
]

const SHARED_MODULES = [
  LayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MomentDateModule
];

const SHARED_MATERIAL_MODULES = [
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [
    SHARED
  ],
  imports: [
    CommonModule,
    SHARED_MODULES,
    SHARED_MATERIAL_MODULES
  ],
  exports: [
    SHARED,
    SHARED_MODULES,
    SHARED_MATERIAL_MODULES
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class SharedModule { }
