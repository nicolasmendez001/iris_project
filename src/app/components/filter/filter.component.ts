import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from 'src/app/interfaces/ToDo';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public filter: string[] = ['all', 'finished', 'pending'];
  public addTodo: FormControl = new FormControl('');

  constructor(private todoService: TodoService){
    
  }


  /**
   * changeFilter
   */
  public changeFilter(filter: string) {
    this.todoService.changeFilter(filter);
  }

  public addTodoItem() {
    if (this.addTodo.invalid) return;
   this.todoService.addTodo(new TodoItem(this.generateId(), 'pending', this.addTodo.value));

  }

  private generateId(): string {
    return new Date().getTime().toString();
  }

}
