import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  
    vettore: any[];
    constructor(){
    this.vettore = []
        }
        ngOnInit(): void {
        }
    autoTot(colore: HTMLInputElement, porte: HTMLInputElement, auto: HTMLInputElement): boolean {
     
      console.log (colore.value,porte.value,auto.value); // questo fa si che si possa visualizzare su CONSOLE
     
      this.vettore.push(colore.value + "" + porte.value + "" + auto.value)
      console.log(this.vettore)
      return false;
}
}