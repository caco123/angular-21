import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-view-container-ref-child-component',
  imports: [],
  templateUrl: './view-container-ref-child-component.html',
  styleUrl: './view-container-ref-child-component.scss',
})
export class ViewContainerRefChildComponent {
  name = input<string>('DEFAULT NAME');
  nameClicked = output<void>();
}
