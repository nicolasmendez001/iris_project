import { EventEmitter, Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: TodoItem[] = [];
  public emitChangeFilter: EventEmitter<string> = new EventEmitter();
  public emitAddTodo: EventEmitter<TodoItem[]> = new EventEmitter();

  /**
   * addTodo
   */
  public addTodo(todo: TodoItem) {
    this.todoList.push(todo);
    this.emitAddTodo.emit(this.todoList);
  }


  /**
   * getTodoList
   */
  public getTodoList():TodoItem[] {
    return this.todoList;
  }

  /**
   * changeFilter
   */
  public changeFilter(filter: string):void {
    this.emitChangeFilter.emit(filter);
  }

  /**
   * deleteTodo
   */
  public deleteTodo(id: string) {
   this.todoList = this.todoList.filter((obj) => obj.id !== id);
   this.emitAddTodo.emit(this.todoList);
  }

}
