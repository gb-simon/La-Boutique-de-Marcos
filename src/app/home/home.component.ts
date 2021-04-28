import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title = "La Boutique";
  trends = "radio, phones, television, coffee";
  public searchKeyword = "";
  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;

  @Input() slides;
  
  constructor(private http: HttpClient) {}

  searchImage() {
    this.http.get(this.url + this.searchKeyword).subscribe((res) => {
      this.data = res["results"];
    });
  }

}
