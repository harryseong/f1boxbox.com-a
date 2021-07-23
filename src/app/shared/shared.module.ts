import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import {MaterialModule} from './modules/material/material.module';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PlaceholderComponent,
    MaterialModule
  ]
})
export class SharedModule { }
