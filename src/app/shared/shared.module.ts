import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './components/panel/panel.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  declarations: [
    PanelComponent,
    CascadingCardComponent,
    AlertComponent,
    CardLoaderComponent
  ],
  exports: [
    MDBBootstrapModulesPro,
    PanelComponent,
    CascadingCardComponent,
    AlertComponent,
    CardLoaderComponent
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
