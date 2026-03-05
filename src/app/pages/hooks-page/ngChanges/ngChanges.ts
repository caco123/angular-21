import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { combineLatest, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ngChanges',
  imports: [],
  templateUrl: './ngChanges.html',
  styleUrl: './ngChanges.scss',
})
export class Changes implements OnChanges {

  @Input() name: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'].firstChange) return;

    console.log(changes);
  }

}
