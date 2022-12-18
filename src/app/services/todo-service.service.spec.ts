import { TestBed } from '@angular/core/testing';
import { TodoItem } from '../interfaces/ToDo';

import { TodoService } from './todo-service.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call addTodo', () => {
    const todo: TodoItem = {id:'1000101', name:'comprar comida', state: 'finished'}
    service.addTodo(todo);
    expect(service.getTodoList().length).toEqual(1);
  });


  //setTodoList
  it('call setTodoList', () => {
    const todo: TodoItem[] = [{id:'1000101', name:'comprar comida', state: 'finished'}];
    service.setTodoList(todo);
    expect(service.getTodoList()).toEqual(todo);
  });

  it('call deleteTodo', () => {
    const todo: TodoItem[] = [{id:'1000101', name:'comprar comida', state: 'finished'}];
    service.setTodoList(todo);
    service.deleteTodo('1000101');
    expect(service.getTodoList().length).toEqual(0);
  });
});
