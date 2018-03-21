import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Environment} from "../../environment/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService{
  constructor(
    private http: Http
  ){}

  private httpGet(url: string): Observable<any> {
    return this.http.get(Environment.ApiEndpoint+url);
  }

  // private createOption(){
  //
  // }

  public getEventsList(): Observable<any>{
    return this.httpGet('Events');
  }

  public getUsers(): Observable<any> {
    return this.httpGet('Users');
  }

}
