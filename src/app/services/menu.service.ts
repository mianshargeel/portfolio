import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuOpen = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpen.asObservable();

 
  toggle() {
    this.menuOpen.next(!this.menuOpen.value);
  }

  open() {
    // console.log('[MenuService] open-function called!');
    this.menuOpen.next(true);
  }

  close() {
    // console.log('[MenuService] CLOSE called!');
    this.menuOpen.next(false);
  }

  isOpen(): boolean {
    // console.log('[MenuService] isOpen-function called!');
    return this.menuOpen.getValue();
  }
}
