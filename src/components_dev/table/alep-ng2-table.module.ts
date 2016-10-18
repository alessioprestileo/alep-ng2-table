import { NgModule } from '@angular/core';

import { PaginatorComponent } from './paginator/paginator.component';
import { SharedModule } from "../../shared/shared.module";
import { AlepNg2TableComponent } from './alep-ng2-table.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    AlepNg2TableComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AlepNg2TableComponent
  ],
  providers: [ ]
})
export class AlepNg2TableModule { }
