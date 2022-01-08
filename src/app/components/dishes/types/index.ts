type Dish = {
  name: string;
}

type CompletedDish = Dish & {
  id: number;
}

type Dishes = CompletedDish[];

export { Dish, Dishes, CompletedDish };
