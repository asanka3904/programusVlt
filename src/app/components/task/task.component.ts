import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Deserializer } from 'ts-json-api-formatter';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  taskList: any;
  today = new Date().toISOString();
  statusArr: { paramName: string; paramValue: any }[] = [];
  //collaps
  onClickExpand: any;

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.onSeachTask();
  }

  //search task
  public onSeachTask(value?: { paramName: string; paramValue: any }[]) {
    this.taskService.searchTasks(value).subscribe((data) => {
      this.taskList = new Deserializer().deserialize(data);
    });
  }

  //status on change
  public statusChange(e: any) {
    if (e.currentTarget.checked) {
      this.statusArr.push({
        paramName: e.currentTarget.value,
        paramValue: e.currentTarget.checked,
      });

      
    } else {
      this.statusArr = this.statusArr.filter((obj) => {
        return obj.paramName !== e.currentTarget.value;
      });
    }
    console.log(this.statusArr);

    this.onSeachTask(this.statusArr);
  }
}
