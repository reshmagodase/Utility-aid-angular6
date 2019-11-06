import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ServiceCallsService {
  constructor(private http: HttpClient) {}

  postServer(url, server) {
    return this.http.post(environment.baseurl + url, server);
  }

  getServer(url) {
    return this.http.get(environment.baseurl + url);
  }
}
