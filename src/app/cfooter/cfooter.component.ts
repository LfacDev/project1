import { Component } from '@angular/core';

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrl: './cfooter.component.css'
})
export class CfooterComponent {
  private policy: string = 'Todos los derechos reservados';

  public getPolicy(): string {
    return this.policy;
  }
}
