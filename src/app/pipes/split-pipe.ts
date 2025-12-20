import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true
})
export class SplitPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    const result = Array.from(value);
    return result.join(args || ' ');
  }
}
