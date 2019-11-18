import {Component} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Pizza } from './models/pizza.model'
import { User } from './models/user.model'


const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

@Component ({
  selector : 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color : red;
    }
  `]
})

export class AppComponent {
  title = 'Mon super site';
  
  selectedPizza: Pizza;

 // Liste des pizzas à afficher dans le composant
 pizzas: Pizza[]= PIZZAS;

 // Quand on clique sur une pizza
 onSelect(pizza: Pizza) {
   console.log(pizza);
   this.selectedPizza = pizza;
 }

 // Auteur à afficher
 user: User = new User('Cron','Alfred','23-05-1989','photo');
}