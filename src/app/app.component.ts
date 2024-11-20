import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Lenguaje de programación TypeScript
  public title: string = 'Componenete principal';

  //propiedades 
  //DataBinding 1. Interpolacion 
  private dato: string = 'lorem ipsum dolor sit amet consectetur adipiscing elit';

  //metodos

  public getDato(): string {
    return this.dato;
  }
}
