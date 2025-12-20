import { Component } from '@angular/core';
import { SplitPipe } from '../../pipes/split-pipe';

@Component({
  selector: 'app-pipes',
  imports: [SplitPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  angular = "Angular 21";
}
