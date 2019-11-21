import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoes;
  todo;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.todoes = JSON.parse(localStorage.getItem('data'));
    console.log(this.todoes);

    this.dataService.data = this.todoes;

    this.dataService.getData().subscribe(t => {
      console.log(t);
      this.todo = t;
      console.log(this.todo);
    });

  }

}
