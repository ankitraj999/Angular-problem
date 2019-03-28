import { Component, Input } from '@angular/core';
import { ChildComponent } from './component/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Operations";
  data=new ChildComponent("","","","")
  onsubmit(from){
    alert(from.value.Id+" "+from.value.name+" "+from.value.salary+" "+from.value.department)
    //alert("hi")
  }
 

}
