import { Injectable } from '@angular/core';
import { PIZZAS } from '../mocks/pizza.mock';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  getPizzas(): Promise<Pizza[]> {
    return Promise.resolve(PIZZAS);
  }

  getPizzasSlowly(): Promise<Pizza[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(this.getPizzas()), 2000);
    })
  }
}