import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubService } from "./shared/services/github.service";
import { TableModule } from '../../src/components/table/table.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    SharedModule,
    TableModule
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
