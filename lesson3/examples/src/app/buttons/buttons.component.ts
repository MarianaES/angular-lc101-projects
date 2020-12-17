import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonState: boolean[] = [true, true, true];
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      this.buttonState.forEach(button => {
         let index: number = this.buttonState.indexOf(button);
         
         this.buttonState[index]= true;
      })

      return this.buttonState;
   }

   shiftLocation(oldLocation: string) {
      let positions: string[] = ['right', 'left', 'center'];

      while (this.location === oldLocation) {
         let randomIndex: number = Math.floor(Math.random()*positions.length);
         this.location = positions[randomIndex];
      }

      return this.location;

   }
   
}
