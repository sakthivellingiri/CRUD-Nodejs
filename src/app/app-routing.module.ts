import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world.component';
import { LoginPageComponent } from './login-page.component';
import { DashboardComponent } from './dashboard.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'update/:id', component: UpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
