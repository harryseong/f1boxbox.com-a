import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import {MaterialModule} from './modules/material/material.module';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import { LoadingComponent } from './components/loading/loading.component';
import { NationalityPipe } from './pipes/nationality/nationality.pipe';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PlaceholderComponent,
    LoadingComponent,
    NationalityPipe,
    MapComponent
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
    LoadingComponent,
    MaterialModule,
    NationalityPipe,
    MapComponent
  ]
})
export class SharedModule { }
