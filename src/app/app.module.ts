import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DistributionComponent } from './distribution/distribution.component';
import { HeaderComponent } from './header/header.component';

import { fakeBackendProvider } from './helpers/fake-backend';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { DistributionService } from './services/distribution.service';

import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: DistributionComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DistributionComponent,
    HeaderComponent,
    AlertComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // adding this to avoid base href error in test cases
        { provide: APP_BASE_HREF, useValue : '/' },

        // provider used to create fake backend
        fakeBackendProvider,
        DistributionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
