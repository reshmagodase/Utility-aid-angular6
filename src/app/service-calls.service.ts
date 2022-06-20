import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ServiceCallsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
  };
  constructor(private http: HttpClient) { }

  postServer(url, server) {
    return this.http.post(environment.baseurl + url, server);
  }

  getServer(url) {
    return this.http.get(environment.baseurl + url);
  }

  postServerRes(url, server) {
    return this.http.post(environment.baseurl + url, server, this.httpOptions);

    // this.http
    // .post<any>('url', {observe: 'response'})
    // .subscribe(resp => {
    //   console.log(resp.headers.get('X-Token'));
    // });
  }
}
