import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlepNg2TableModule } from '../../src/components/table/alep-ng2-table.module';
import { AppComponent } from './app.component';
import { GitHubService } from "./shared/services/github.service";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AlepNg2TableModule,
    SharedModule
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
