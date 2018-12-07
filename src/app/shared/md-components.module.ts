import {  NgModule } from "@angular/core";
import {  MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatSidenavModule,
          MatDividerModule,
          MatExpansionModule,
          MatListModule
        } from '@angular/material';

@NgModule({
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule
  ]
})

export class MdComponentsModule{ }
