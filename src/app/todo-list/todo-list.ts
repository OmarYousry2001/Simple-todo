import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.newTask = ''; // Clear input if task is empty
      return; // Prevent adding empty tasks
    }
    this.tasks.push(this.newTask);
    this.newTask = ''; // Clear input after adding task
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove task at specified index
  }
}
