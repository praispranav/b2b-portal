import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {
  // private userDefaultValueObj: User;
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  // constructor(
  //   private http: HttpClient
  // ) {
  //   this.userDefaultValueObj = new User();
  //   this.currentUserSubject = new BehaviorSubject<User>(
  //     JSON.parse(<string>localStorage.getItem("currentUser"))
  //   );
  //   this.currentUser = this.currentUserSubject.asObservable();
  // }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  // login(username: string, password: string) {
  //   return this.http
  //     .post<any>(`${environment.apiUrl}/authenticate`, {
  //       username,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes

  //         localStorage.setItem("currentUser", JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem("currentUser");
  //   this.currentUserSubject.next(this.userDefaultValueObj);
  //   return of({ success: false });
  // }
}
