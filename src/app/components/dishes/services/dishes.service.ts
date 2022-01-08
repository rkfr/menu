import { Injectable } from '@angular/core';
import {Dish, Dishes, CompletedDish} from "../types";

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor() { }

  private dishes: Dishes = [];

  public get(): Dishes {
    return this.dishes;
  }

  public add(dish: Dish): void {
    this.dishes.push({  ...dish, id: this.generateId()});
  }

  public remove(id: number): void {
    this.dishes = this.dishes.filter((dish: CompletedDish) => dish.id !== id);
  }

  public edit(id: number, name: string): void {
    this.dishes = this.dishes.map((dish: CompletedDish) => (dish.id === id) ? { ...dish, name } : dish);
  }

  private generateId(): number {
    return Date.now() + Math.random() * 10;
  }
}
