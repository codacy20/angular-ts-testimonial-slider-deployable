import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Testinmony } from "../app/Models/Testimony";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestimonyService {
  constructor(private http: HttpClient) {}

  getTestimony(): Observable<Testinmony[]> {
    return this.http.get<Testinmony[]>(
      "https://5f59f40eb121580016cadfef.mockapi.io/api/testimony"
    );
  }
}
