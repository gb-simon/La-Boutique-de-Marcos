import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./front-page/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./front-page/footer/footer.component";
import { CommerceComponent } from "./front-page/commerce/commerce.component";
import { FiltersComponent } from "./front-page/filters/filters.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./front-page/product/product.component";
import { SearchComponent } from './front-page/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front-page/front.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'about', component: AboutComponent },
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
    FiltersComponent,
    ProductComponent,
    SearchComponent,
    AboutComponent,
    FrontComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
, FormsModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
