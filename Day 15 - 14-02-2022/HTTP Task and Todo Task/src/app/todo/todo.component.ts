import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTask:string = "";
  task:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    this.task.push(this.newTask);
    this.newTask="";
    console.log(this.task);
}
  delTask(index:number){
    delete this.task[index];
}

}
