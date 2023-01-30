import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './MyComponents/list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Urls } from './MyComponents/constants/urls';
import { DynamicFieldsComponent } from './MyComponent/dynamic-fields/dynamic-fields.component';
import { HeaderMapTestComponent } from './MyComp/header-map-test/header-map-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DynamicFieldsComponent,
    HeaderMapTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Urls],
  bootstrap: [AppComponent]
})
export class AppModule { }
