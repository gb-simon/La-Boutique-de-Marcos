import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public searchKeyword = "";
  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;
  trends = "radio, phones, television, coffee";

  constructor(private http: HttpClient) {}

  searchImage() {
    this.http.get(this.url + this.searchKeyword).subscribe((res) => {
      this.data = res["results"];
    });
  }
  ngOnInit(): void {
  }

}
