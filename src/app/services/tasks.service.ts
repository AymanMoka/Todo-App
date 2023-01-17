import { Injectable } from '@angular/core';
import {Task} from "../model/task";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url:string = 'http://localhost:3000/tasks'
  constructor(private  http:HttpClient) { }

  addTask(task:Task):Observable<Task>{
    return  this.http.post<Task>(this.url,task);
  }
  getAllTasks():Observable<Task[]>{
    return  this.http.get<Task[]>(this.url);
  }
  deleteTask(task:Task):Observable<Task>{
    return  this.http.delete<Task>(`${this.url}/${task.id}`);
  }
  editTask(task:Task):Observable<Task>{
    return  this.http.put<Task>(`${this.url}/${task.id}`,task);
  }
}
