import { Injectable } from '@angular/core';
import { PIZZAS } from '../mocks/pizza.mock';
import { Pizza } from '../models/pizza.model';
import { HttpClient } from '@angular/common//http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPizzas(): Promise<Pizza[]> {
    //this.http.put('api/pizza/3', {name: 'Toto'}).toPromise().then(
    //  response => response)
    return this.http.get(this.url + 'pizzas/').toPromise().then(
      response => response as Pizza[]
    );
  }

  getPizzasSlowly(): Promise<Pizza[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPizzas()), 2000);
    })
  }

  // Récupérer une seule pizza
  getPizza(id: number): Promise<Pizza> {
    return this.http.get(this.url + 'pizzas/' + id).toPromise().then(
      response => response as Pizza
    )
  }

  update(pizza: Pizza) {
    return this.http.put(this.url + 'pizzas/' + pizza.id, pizza).toPromise().then(
      () => pizza
    );
  }

  create(pizza: Pizza) {
    return this.http.post(this.url + 'pizzas', pizza).toPromise().then(
      response => response as Pizza
    );
  }

  delete(id: number) {
    return this.http.delete(this.url + 'pizzas/' + id).toPromise();
}

}
