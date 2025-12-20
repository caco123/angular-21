import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, viewChild, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Changes } from './ngChanges/ngChanges';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hooks',
  imports: [Changes, FormsModule],
  templateUrl: './hooks.html',
  styleUrl: './hooks.scss',
})
export class Hooks implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('child') child!: Changes;
  changeComponente = viewChild.required(Changes);

  name: string = '';
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.child);
    console.log(this.changeComponente());
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.complete();
  }


}
