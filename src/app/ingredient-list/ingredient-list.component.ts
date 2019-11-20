import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../models/ingredient'

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients : Array<Ingredient>;
  constructor() { }

  @Output() selected: EventEmitter<any> = new EventEmitter();

  add(ingredient:Ingredient) {
      // Quand une pizza est supprimée, on doit pouvoir informer le composant parent   
      this.selected.emit(ingredient);
  }

  ngOnInit() {
  }
}
