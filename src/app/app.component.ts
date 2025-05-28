import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuService } from './services/menu.service';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FooterComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpen = false;
  menuOpen$ = this.menuService.menuOpen$;
  private routerSubscription?: Subscription;

  constructor(public menuService: MenuService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // console.warn('[Router] NavigationStart to:', event.url);
      }
    });
  }

  ngOnInit() {
    this.menuService.menuOpen$.subscribe(open => {
      this.isMenuOpen = open;
      // Lock scroll
      document.body.style.overflow = open ? 'hidden' : '';
    });
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // console.log('Navigation occurred - current menu state:', this.isMenuOpen);
    });
  }

}
