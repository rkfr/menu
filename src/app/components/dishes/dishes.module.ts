import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './components/dishes/dishes.component';



@NgModule({
    declarations: [
        DishesComponent
    ],
    exports: [
        DishesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DishesModule { }
