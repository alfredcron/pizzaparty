import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class PizzaResolverService implements Resolve <Pizza[]> {
    constructor(private pizzaService: PizzaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pizza[] |
    Observable<Pizza[]> | Promise<Pizza[]> {
        return this.pizzaService.getPizzasSlowly();
    }
}