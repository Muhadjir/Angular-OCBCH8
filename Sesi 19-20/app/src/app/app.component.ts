// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   parentMessage = "Halo";
//   parentInc = "Tambah";
//   parentDec = "Kurang";
//   parentReset = "0";
//   count = 0;
//   item = ['sepatu', 'sandal', 'tas']
//   input = ""

  
//   addItemParent(newItem:string){
//     this.item.push(newItem)
//     // this.input = newItem
//   }
//   counter(){
//     this.count += 1;
//   }
//   decre(){
//     this.count -= 1;
//   }
//   reset(){
//     this.count = 0;
//   } 
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesi19';
  parentMessage = "Halo ini dari parrent";
  counter = 0;
  msg = "true";
  messages = [
    "Then",
    "Now"
  ]
  items = ['sepatu', 'baju']

  people = [
    {
      name: "Muhadjir",
      age: 23,
      country: "USA"
    },
    {
      name: "Angga",
      age: 23,
      country: "INA"
    },
    {
      name: "Alan",
      age: 22,
      country: "HK"
    },
    {
      name: "Andra",
      age: 22,
      country: "UK"
    },
    {
      name: "Bagos",
      age: 21,
      country: "UK"
    },
    {
      name: "Yusuf",
      age: 20,
      country: "USA"
    }
  ]

  currentDate = new Date()
  addItemInParent(newItem: string){
    this.items.push(newItem);
  }

  addIncreaseInParent(){
    this.counter +=1;
    if(this.counter >-1){
      this.msg = "true";
    }
    if(this.counter >10){
      this.msg = "Gak capek bro?";
    }
  }

  addDecreaseInParent(){
    this.counter -=1;
    if(this.counter <0){
      this.msg = "Error bro! jangan di decrease terus";
    }
  }

  addResetInParent(){
    this.counter = 0;
    if(this.counter >-1){
      this.msg = "true";
    }
  }

}
