import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { CommerceComponent } from './commerce/commerce.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, CommerceComponent, FiltersComponent,],
  imports: [BrowserModule, NgbModule],
=======
import { FooterComponent } from "./footer/footer.component";
import { CommerceComponent } from "./commerce/commerce.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CommerceComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule],
>>>>>>> 53f8d68603f2d9b921ebab9b0a4fe783c2333825
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
