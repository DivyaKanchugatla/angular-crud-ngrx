import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() inputValue :string = "";
 @Output() childValue = new EventEmitter<string>();
 signOut():void{
  this.childValue.emit("Hello, I am coming from Child")
 }
}
