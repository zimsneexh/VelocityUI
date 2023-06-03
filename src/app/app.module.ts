import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { VMListComponent } from './vmlist/vmlist.component';
import { InstallMediaComponent } from './install-media/install-media.component';
import { HttpClientModule } from '@angular/common/http';
import { VMInfoComponent } from './vminfo/vminfo.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    VMListComponent,
    InstallMediaComponent,
    VMInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
