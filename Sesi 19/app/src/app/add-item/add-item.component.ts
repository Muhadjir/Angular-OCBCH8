import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent{
  newInput = ""
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(){
    this.newItemEvent.emit(this.newInput);
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
