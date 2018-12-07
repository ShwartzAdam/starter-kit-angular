import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdComponentsModule } from "@app/shared/md-components.module";

@NgModule({
  imports: [CommonModule,
            RouterModule,
            BrowserAnimationsModule,
            MdComponentsModule
  ],
  declarations: [HeaderComponent,
                 ShellComponent,
                 FooterComponent
  ]
})
export class ShellModule {}
