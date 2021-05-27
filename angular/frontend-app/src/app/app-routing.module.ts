import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionsComponent} from './receptions/receptions.component';
import { ReceptionDetailComponent } from './reception-detail/reception-detail.component';
import { AddReceptionComponent } from './add-reception/add-reception.component';
import { DeleteReceptionComponent } from './delete-reception/delete-reception.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'receptions', component: ReceptionsComponent },
  { path: 'detail/:id', component: ReceptionDetailComponent },
  { path: 'add-reception', component: AddReceptionComponent },
  { path: 'delete-reception/:id', component: DeleteReceptionComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
