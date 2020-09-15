import { Component, Input, SimpleChange } from "@angular/core";
import { Testinmony } from "../Models/Testimony";
import {
  trigger,
  transition,
  state,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-testimony",
  templateUrl: "./testimony.component.html",
  styleUrls: ["./testimony.scss"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(600)])
    ])
  ]
})
export class AppTestimony {
  title = "CodeSandbox";
  @Input() current: Testinmony;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log("changes testimony", changes);
  }
}
