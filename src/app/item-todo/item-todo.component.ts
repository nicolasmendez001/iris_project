import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mergeMap } from 'rxjs';
import { TodoItem } from '../interfaces/ToDo';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {

  @Input() todo!: TodoItem;
  public checkTodo!: FormControl;

  constructor(private todoService: TodoService){

  }

  ngOnInit(): void {
    this.checkTodo = new FormControl(this.todo.state === 'finished');
    /* this.checkTodo.valueChanges.pipe(
     (value) => {
      console.log('v', value);
 
    }) */
  }

  /**
   * deleteItem
   */
  public deleteItem() {
    console.log("delete", this.todo.id);
    
    this.todoService.deleteTodo(this.todo.id);
  }

  checkValue(event: any) {
    this.todo.state = event.checked ? 'finished' : 'pending';
  }
}
