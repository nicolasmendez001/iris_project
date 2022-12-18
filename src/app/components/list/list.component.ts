import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from 'src/app/interfaces/ToDo';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public checkTodo: FormControl = new FormControl();
  public todoList: TodoItem[] = [];
  public todoFilter: string = 'all';

  constructor(private todoService: TodoService){
    todoService.emitChangeFilter.subscribe((filter:string) =>{
      this.todoFilter = filter;
    });

    todoService.emitAddTodo.subscribe((todoList: TodoItem[])=>{
      this.todoList = todoList;
    });

  }
  ngOnInit(): void {
  }
}
