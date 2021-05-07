import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  @Input() slides;
  public searchKeyword = "";
  public clothes = "clothes";
  public food = "food";
  public tech = "tech";
  title_1 = "Technology";
  title_2 = "Clothes";
  title_3 = "Food";

  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;

  constructor(private http: HttpClient) {}
  searchImage_clothes() {
    this.http.get(this.url + this.clothes).subscribe((res) => {
      this.data = res["results"];
    });
  }
  searchImage_food() {
    this.http.get(this.url + this.food).subscribe((res) => {
      this.data = res["results"];
    });
  }
  searchImage_tech() {
    this.http.get(this.url + this.tech).subscribe((res) => {
      this.data = res["results"];
    });
  }
}
