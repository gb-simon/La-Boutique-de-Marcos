import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from './footer/footer.component';
import { CommerceComponent } from './commerce/commerce.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, CommerceComponent, FiltersComponent,],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
