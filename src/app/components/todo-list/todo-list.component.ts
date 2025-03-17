import { Component, Input } from '@angular/core';
import { TodolistType } from '../../app.component';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, EditFormComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todoList: TodolistType[] = [];
  @Output() todoItem = new EventEmitter<TodolistType>();
  @Output() onDelete = new EventEmitter<TodolistType>();

  todoListOriginal: TodolistType[] = [];
  tempTodo: TodolistType = {
    id: 0,
    assignTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comment: '',
  };

  searchKeyword: string = '';

  ngOnInit() {
    this.todoListOriginal = this.todoList;
  }

  onEditClick(todo: TodolistType) {
    this.tempTodo = todo;
    console.log('TODO', todo);
  }

  onEditEvent(todo: TodolistType) {
    console.log('TODO LIST EVENT', todo);
    this.todoItem.emit(todo);
  }
  confirmDelete(todo: TodolistType): void {
    if (confirm('Are you sure you want to delete this task assigned to ' + todo.assignTo + '?')) {
      this.onDeleteClick(todo);
    }
  }
  onDeleteClick(todo: TodolistType) {
    this.onDelete.emit(todo);
  }

  onSearch() {
    this.todoList = this.todoListOriginal.filter(
      (item) =>
        item.assignTo
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase()) ||
        item.comment
          ?.toLowerCase()
          .includes(this.searchKeyword.toLowerCase()) ||
        item.priority
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase()) ||
        item.dueDate.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        item.status.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
}
