import { Component } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent {
  company = 'Digital Lync';
  taskList = [];

  addTask(a){
    this.taskList.push(a);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}
