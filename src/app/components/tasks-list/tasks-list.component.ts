import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.tasks = this._dataService.getTasks();
  }

  addTask(task: Task) {
    this._dataService.addTask(task);
  }

}
