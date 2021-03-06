import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./front-page/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { CommerceComponent } from "./front-page/commerce/commerce.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./front-page/product/product.component";
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front-page/front.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { QuoteComponent } from './front-page/quote/quote.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CommerceComponent,
    ProductComponent,
    AboutComponent,
    FrontComponent,
    PageNotFoundComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    FaqComponent,
    QuoteComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
, FormsModule, NgbModule, HttpClientModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
