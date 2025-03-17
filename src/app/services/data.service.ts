import { Injectable } from '@angular/core';
import { TodolistType } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todoList: TodolistType[] = [];

  constructor() {}

  getData() {
    return this.todoList;
  }

  appendItem(item: TodolistType) {
    this.todoList.push(item);
  }
}
