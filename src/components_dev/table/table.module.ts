import { NgModule } from '@angular/core';

import { PaginatorComponent } from './paginator/paginator.component';
import { SharedModule } from "../../shared/shared.module";
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    TableComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TableComponent
  ],
  providers: [ ]
})
export class TableModule { }
