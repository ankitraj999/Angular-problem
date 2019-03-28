import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(public id:string,public name:string,public salary:string,public department:string) { }



}
