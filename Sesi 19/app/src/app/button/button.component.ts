// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// // import { EventEmitter } from 'stream';

// @Component({
//   selector: 'app-button',
//   templateUrl: './button.component.html',
//   styleUrls: ['./button.component.css']
// })
// export class ButtonComponent implements OnInit {
  
//   constructor() { }
//   @Input() actionName = '';
//   @Output() counterEvnt = new EventEmitter();

//   buttonClick() {
//     this.counterEvnt.emit()
//   }


//   ngOnInit(): void {
//   }

// }
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  
  @Input() message ='';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newIncreaseEvent = new EventEmitter<string>();
  @Output() newDecreaseEvent = new EventEmitter<string>();
  @Output() newResetEvent = new EventEmitter<string>();


  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

  addNewIncrease(value: string){
    this.newIncreaseEvent.emit(value);
  }

  addNewDecrease(value: string){
    this.newDecreaseEvent.emit(value);
  }

  addNewReset(value: string){
    this.newResetEvent.emit(value);
  }
}
