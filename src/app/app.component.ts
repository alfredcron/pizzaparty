import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient';
import { PizzaService } from './services/pizza.service';
import { $ } from 'protractor';
import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color: red;
    }
  `]
})

export class AppComponent {
  title = 'Mon super site';
  loading = false;
  routerEvents: Subscription;
  user;

  constructor(
    private router: Router,
    private AuthService : AngularFireAuth
    ) { }

  ngOnInit() {
    // Ecouter le login
    this.AuthService.authState.subscribe(user => {
      this.user = (user !== null) ? user.email : null;
      console.log(this.user);
    })




    this.routerEvents = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }
}