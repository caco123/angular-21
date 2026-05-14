import { Component, inject } from '@angular/core';
import { SplitPipe } from '../../pipes/split-pipe';

@Component({
  selector: 'app-pipes',
  imports: [SplitPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
  providers: [SplitPipe]
})
export class PipePage {
  private readonly splitPipe = inject(SplitPipe);
  angular = "Angular 21";
  angularSplit = this.splitPipe.transform(this.angular, '*');
}
