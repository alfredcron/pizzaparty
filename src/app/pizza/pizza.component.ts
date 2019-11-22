import {Component, Input, Output, EventEmitter} from "@angular/core";
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html'
})

export class PizzaComponent{
    @Input('pizza') selectedPizza : Pizza;
    @Output() unselected: EventEmitter<any> = new EventEmitter();

    constructor(private pizzaService: PizzaService){}

    delete() {
        // Quand une pizza est supprimée, on doit pouvoir informer le composant parent
        this.unselected.emit(this.selectedPizza);
        this.selectedPizza = null;  
    }

    save() {
        // Quand une pizza est supprimée, on doit pouvoir informer le composant parent
        this.pizzaService.update(this.selectedPizza);

    }

}