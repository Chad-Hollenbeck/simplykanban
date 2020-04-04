import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { CardRoutingModule } from './routes/card.routes.module';


// *: Components
/*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    CardRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class CardModule { }
