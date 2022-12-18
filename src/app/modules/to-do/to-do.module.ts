import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ToDoComponent } from 'src/app/components/to-do/to-do.component';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FilterPipe } from 'src/app/components/pipes/filter.pipe';
import { ItemTodoComponent } from 'src/app/item-todo/item-todo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


const routes: Routes = [{ path: '', component: ToDoComponent }];


@NgModule({
  declarations: [
    FilterComponent,
    ListComponent,
    ToDoComponent,
    FilterPipe,
    ItemTodoComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class ToDoModule { }
