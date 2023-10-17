import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { DashboardComponent } from './dashboard.component';
import { UpdateComponent} from './update.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginPageComponent,
    DashboardComponent,
    UpdateComponent


    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
