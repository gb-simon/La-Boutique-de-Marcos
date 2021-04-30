import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"],
})

export class FiltersComponent implements OnInit {

  title_1 = "Clothes";
  title_2 = "Technologies";
  title_3 = "Food";

  constructor() {}

  ngOnInit(): void {}
}
