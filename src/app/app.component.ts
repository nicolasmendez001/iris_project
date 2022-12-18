import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TodoService } from './services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iris_code';

  constructor(private cookiService: CookieService, private todoService: TodoService) {
    setTimeout(() => {
      this.todoService.setTodoList(JSON.parse(this.cookiService.get('todoList')));
    }, 1000);
  }
}
