import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormGroup  } from '@angular/forms';

import { ReceptionDetailComponent } from './reception-detail/reception-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeleteReceptionComponent } from './delete-reception/delete-reception.component';
import { ReceptionsComponent } from './receptions/receptions.component';
import { AddReceptionComponent } from './add-reception/add-reception.component';
import { HeaderComponent } from './header/header.component';
import { MY_DATE_FORMATS} from './model/my-date-formats';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    ReceptionsComponent,
    ReceptionDetailComponent,
    MessagesComponent,
    AddReceptionComponent,
    DeleteReceptionComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRippleModule,
    MatMenuModule,

  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

