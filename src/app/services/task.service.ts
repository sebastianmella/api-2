import { Injectable } from '@angular/core';
import { task } from '../models/taks';

const TasksList = [ 
  {
    "id":1,
    "title": "do my homework",
    "description": "it is boring"
  },
  {
    "id":2,
    "title": "clean my roon",
    "description": "it is boring tooo"
  },
  {
    "id":3,
    "title": "do wathever",
    "description": "ohh yea!"
  }
]
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks() {
    return TasksList;
  }

  getOneTask(_id) {
    return TasksList.find(task => task.id === _id)
  }

  addTask(task : task) {
    TasksList.push(task);
  }

  editTask(newTaskEdit) {
    const index = TasksList.findIndex(task => task.id === newTaskEdit.id)

    TasksList[index] = newTaskEdit; 
  }

  deletetask(_id) {
    TasksList.splice(_id, 1)
  }
}
