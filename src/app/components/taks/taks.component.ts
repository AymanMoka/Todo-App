import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../model/task";

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.css']
})
export class TaksComponent implements OnInit{
  taskObj :Task = new Task();
  tasksArr !:Task[] ;
  addTaskValue:string = '';
  editTaskValue:string = '';

  constructor(private taskService:TasksService) {
  }
  ngOnInit() {
    this.addTaskValue='';
    this.editTaskValue='';
    this.taskObj = new Task();
    this.tasksArr = [];
    this.getAllTasks();
  }

  editTask(){
    this.taskObj.taskName = this.editTaskValue;
    this.taskService.editTask(this.taskObj).subscribe(
      data=>{
        this.ngOnInit();
      },err=>{
        alert('Unable to edit task')
      }
    )
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      data=>{
        this.ngOnInit()
      },error=>{
        alert('Unable to delete task')
      }
    )
  }
  addTask(){
    this.taskObj.taskName = this.addTaskValue;
    this.taskService.addTask(this.taskObj).subscribe(
      data=>{
            this.ngOnInit();
            this.addTaskValue = '';
      },error => {
        alert(error)
      }
    )
  }
   getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      data=>{
        this.tasksArr = data;
      },error => {
        alert('Unable to get all tasks')
      }
    )
  }

  call(task:Task){
    this.taskObj =task;
    this.editTaskValue = task.taskName;
  }

}
