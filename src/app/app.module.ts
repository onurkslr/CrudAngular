import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { OperationsComponent } from './operations/operations.component';
import { AddComponent } from './list/add/add.component';
import { ServicesComponent } from './services/services.component';
import { UpdateComponent } from './list/update/update.component';
import { DeleteComponent } from './list/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OperationsComponent,
    AddComponent,
    ServicesComponent,
    UpdateComponent,
    DeleteComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
