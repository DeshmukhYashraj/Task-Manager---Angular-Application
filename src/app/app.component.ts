import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';

export type TodolistType = {
  id: number;
  assignTo: string;
  status: string;
  dueDate: string;
  priority: string;
  comment?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent, TodoFormComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-project';

  todoList: TodolistType[] = [
    {
      status: 'Completed',
      assignTo: 'User 1',
      priority: 'High',
      dueDate: '2024-10-12',
      comment: 'This task for testing',
      id: 7417216.368405726,
    },
  ];

  updateTodoList(event: TodolistType) {
    console.log('EVENT ', event);
    this.todoList.push(event);
  }

  reloadPage() {
    window.location.reload();
  }

  editTodoList(todo: TodolistType) {
    this.todoList = this.todoList.map((item) => {
      if (item.id == todo.id) return todo;
      return item;
    });
  }

  onTodoDelete(todo: TodolistType) {
    this.todoList = this.todoList.filter((item) => item.id != todo.id);
  }
}
