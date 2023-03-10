import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call changeFilter', () => {
    const changeMock = jest.spyOn((component as any).todoService, 'changeFilter');
    component.changeFilter('finished');
    expect(changeMock).toHaveBeenCalled();
  });

  it('call addTodoItem', () => {
    const addMock = jest.spyOn((component as any).todoService, 'addTodo');
    component.addTodoItem();
    expect(addMock).toHaveBeenCalled();
    expect(component.addTodo.value).toEqual('');
  });


});
