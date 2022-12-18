import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/ToDo';

@Pipe({
    name: 'todoFilter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(todos: TodoItem[], filter: string): TodoItem[] {
        return filter === 'all' ? todos : todos.filter(todo => todo.state === filter);
    }
}