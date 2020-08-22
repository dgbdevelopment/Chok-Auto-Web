import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root",
})
export class MailerService {
  private serverRoute = "//mailer.dgbdevelopment.com/send-email";

  constructor(private _http: HttpClient) {}

  sendMail(mail): Observable<any> {
    const body = JSON.stringify(mail);
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.serverRoute, body, { headers: headers });
  }
}
