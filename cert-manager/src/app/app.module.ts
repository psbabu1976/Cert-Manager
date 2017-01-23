import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { SuccessComponent } from './components/success.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [

  { path: 'login', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
      UserComponent,
      HomeComponent,
      SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
