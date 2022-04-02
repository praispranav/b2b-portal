import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppLoaderService {
  constructor() { }
  static onChange = new Subject<boolean>();
  
  public static show() {
    ServiceAppLoaderService.onChange.next(true);
  }
  public static hide() {
    ServiceAppLoaderService.onChange.next(false);
  }
}
