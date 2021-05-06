import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title = "La Boutique";

  @Input() slides;
  public searchKeyword = "";
  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&per_page=6&query="`;
  trends = "radio, phones, television, coffee";
  
  constructor(private http: HttpClient) {}


  searchImage() {
    this.http.get(this.url + this.searchKeyword).subscribe((res) => {
      this.data = res["results"];
    });
  }}
