import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cat: string = '';
  subject: BehaviorSubject<string> = new BehaviorSubject(this.cat);
  constructor() { }
  setCategory(cat: string) {
    this.cat = cat;
    this.subject.next(this.cat);
  }
  getCategory() {
    return this.subject;
  }
}
