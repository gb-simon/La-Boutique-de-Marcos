import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  
  title = "La Boutique";

  @Input() slides;
  public searchKeyword = "";
  public data = [];
  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&per_page=6&query="`;
  trends = "radio, phones, television, coffee";
  loading: boolean = true;
  quote!: Quote;
  quoteList!: Quote[];
  tweetURL!: string;
  getNewQuote: () => void = (): void => {
    const idx = Math.floor(Math.random() * this.quoteList.length);
    const newQuote = this.quoteList[idx];
    this.quote = newQuote;
  };
  constructor(private http: HttpClient) {}

  searchImage() {
    this.http.get(this.url + this.searchKeyword).subscribe((res) => {
      this.data = res["results"];
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const quotesURL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    this.quoteList = quotes.quotes;
    this.quote = newQuote;
    this.setTweetURL(newQuote);
    this.loading = false;
  }

  setTweetURL(quote: Quote): void {
    this.tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} --${quote.author}`;
  }
}
