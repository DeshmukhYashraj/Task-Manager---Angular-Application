import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { TodolistType } from '../../app.component';
import { totalmem } from 'os';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent {
  @ViewChild('f') myForm: NgForm | undefined;
  @Output() todoItemEmmiter = new EventEmitter<TodolistType>();
  @Input() todoItem: TodolistType = {
    id: 0,
    assignTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comment: '',
  };

  // @Output() todoItem = new EventEmitter<TodolistType>();
  values: TodolistType = {
    id: 0,
    assignTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comment: '',
  };

  ngOnInit() {
    console.log('EDIT FORM', this.todoItem);
    this.values = this.todoItem;
  }

  onFormSubmit() {
    this.todoItemEmmiter.emit(this.todoItem);
  }
}
