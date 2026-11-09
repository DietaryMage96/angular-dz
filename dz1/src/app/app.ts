import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task1 } from './task1/task1';
import { Task2 } from './task2/task2';
import { Task3 } from './task3/task3';

@Component({
  imports: [RouterOutlet, Task1, Task2, Task3],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
