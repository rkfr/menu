import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import {CalendarModule} from "../calendar/calendar.module";
import {DishesModule} from "../dishes/dishes.module";



@NgModule({
    declarations: [
        BoardComponent
    ],
    exports: [
        BoardComponent
    ],
  imports: [
    CommonModule,
    CalendarModule,
    DishesModule
  ]
})
export class BoardModule { }
