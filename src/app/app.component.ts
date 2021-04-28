import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public slides = [
    {
      src:
        "https://kingstonlaffertydesign.com/wp-content/uploads/2011/03/green.jpg",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0955/0146/products/p11-buttercup-yellow-613372_1024x1024.jpg?v=1589394337",
    },
    {
      src:
        "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-light-brown-solid-color-background.jpg",
    },
  ];
}
