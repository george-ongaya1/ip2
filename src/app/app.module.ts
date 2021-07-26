import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';  
import { GoalService } from './goal-service/goal.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},

];
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
    

  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
