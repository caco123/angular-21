import { Component } from '@angular/core';
import { SplitPipe } from '../../pipes/split-pipe';

@Component({
  selector: 'app-pipes',
  imports: [SplitPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class PipePage {
  angular = "Angular 21";
}
