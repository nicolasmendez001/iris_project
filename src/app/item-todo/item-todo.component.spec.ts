import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ItemTodoComponent } from './item-todo.component';

describe('ItemTodoComponent', () => {
  let component: ItemTodoComponent;
  let fixture: ComponentFixture<ItemTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTodoComponent ],
      imports:[MatCheckboxModule, MatIconModule, MatFormFieldModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTodoComponent);
    component = fixture.componentInstance;
    component.todo = { id: '10000', name: 'comprar', state: 'pending' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call deleteItem', () => {
    const deleteMock = jest.spyOn((component as any).todoService, 'deleteTodo');
    component.deleteItem();
    expect(deleteMock).toHaveBeenCalled();
  });

  it('call checkValue', () => {
    const checkValue = jest.spyOn((component as any).todoService, 'changeState');
    component.checkValue({checked: true});
    expect(checkValue).toHaveBeenCalled();
  });

});
