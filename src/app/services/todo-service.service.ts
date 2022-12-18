import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TodoItem } from '../interfaces/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: TodoItem[] = [];
  public emitChangeFilter: EventEmitter<string> = new EventEmitter();
  public emitAddTodo: EventEmitter<TodoItem[]> = new EventEmitter();

  constructor(private cookies: CookieService){
    
  }

  /**
   * addTodo
   */
  public addTodo(todo: TodoItem) {
    this.todoList.push(todo);
    this.emitAddTodo.emit(this.todoList);
    this.saveTodoList();
  }


  /**
   * getTodoList
   */
  public getTodoList(): TodoItem[] {
    return this.todoList;
  }

  /**
   * setTodoList
   */
  public setTodoList(todos: TodoItem[]): void {
    
    this.todoList = todos;
    this.emitAddTodo.emit(this.todoList);
  }

  /**
   * changeFilter
   */
  public changeFilter(filter: string): void {
    this.emitChangeFilter.emit(filter);
  }

  /**
   * deleteTodo
   */
  public deleteTodo(id: string) {
    this.todoList = this.todoList.filter((obj) => obj.id !== id);
    this.emitAddTodo.emit(this.todoList);
    this.saveTodoList();
  }

  /**
   * changeState
   */
  public changeState(todo: TodoItem, check: boolean) {
    todo.state = check ? 'finished' : 'pending';
    this.saveTodoList();
  }

  private saveTodoList(): void{
    this.cookies.set('todoList', JSON.stringify(this.getTodoList()))
  }

}
