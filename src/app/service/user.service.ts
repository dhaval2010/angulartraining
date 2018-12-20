import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  baseUrlUpdate: string = 'https://jsonplaceholder.typicode.com/';


  getService(): Promise<any> {
    return this.http
        .get(this.baseUrl)
        .toPromise()
        
        .catch(this.handleError);
}

getUserById(id): Promise<any> {
  return this.http
      .get(this.baseUrl + '/' + id)
      .toPromise()
      
      .catch(this.handleError);
}

addUser(body:any): Promise<any> {
  return this.http
      .post(this.baseUrl,JSON.stringify(body))
      .toPromise()
            .catch(this.handleError);
}

updateUser(body:any): Promise<any> {
  console.log('body',body.id)
  return this.http
      .put(this.baseUrl + '/' + body.id,JSON.stringify(body))
      .toPromise()
            .catch(this.handleError);
}

deleteUser(id:any): Promise<any> {
  
  return this.http
      .delete(this.baseUrl + '/' + id)
      .toPromise()
            .catch(this.handleError);
}
private extractData(res: Response) {
    let body = res.json();
    return body || {};
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}

  // getUserById(id: number) {
  //   return this.http.get<User>(this.baseUrl + '/' + id);
  // }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  // updateUser(user: User) {
  //   return this.http.put(this.baseUrl + '/' + user.id, user);
  // }

  // deleteUser(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
}
