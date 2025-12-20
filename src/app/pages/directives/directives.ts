import { Component } from '@angular/core';
import { CustomColor } from './custom/custom';

@Component({
  selector: 'app-directives',
  imports: [CustomColor],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {

}
