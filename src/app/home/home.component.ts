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
  public searchKeyword = "";
  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;

  @Input() slides;

  currentSlide = 0;

  constructor(private http: HttpClient) {}

  searchImage() {
    this.http.get(this.url + this.searchKeyword).subscribe((res) => {
      this.data = res["results"];
    });
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
