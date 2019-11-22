import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pizza } from '../models/pizza.model';
import { PIZZAS } from '../mocks/pizza.mock';

export class FakeApi implements InMemoryDbService {
  createDb() {
    const pizzas : Pizza[] = PIZZAS;
    return {pizzas};
  }
}