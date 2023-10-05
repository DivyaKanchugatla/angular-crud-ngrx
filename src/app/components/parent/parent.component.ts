import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 
 parentValue :  string ="Hello , I am coming from Parent"
 handleChild(value:string):void{
  
  console.log(value)
 }
}
