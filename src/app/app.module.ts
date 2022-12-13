import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { ErrorHandleService } from './services/error-handle.service';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { TaskComponent } from './components/task/task.component';
import { MatIconModule } from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table'
import {MatExpansionModule} from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SearchHeaderComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [ItemService,ErrorHandleService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
