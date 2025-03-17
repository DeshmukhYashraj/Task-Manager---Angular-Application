import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TodolistType } from '../../app.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @ViewChild('f') myForm: NgForm | undefined;
  @Output() todoItem = new EventEmitter<TodolistType>();
  values: TodolistType = {
    id: 0,
    assignTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comment: '',
  };

  onFormSubmit() {
    this.values = this.myForm?.form.value;
    this.values.id = Math.random() * 10000000;
    this.todoItem.emit(this.values);
  }
}
