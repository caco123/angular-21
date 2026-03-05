import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, combineLatest, concatMap, debounceTime, exhaustMap, filter, forkJoin, interval, map, mergeMap, of, retry, Subject, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-page',
  imports: [],
  templateUrl: './rxjs-page.html',
  styleUrl: './rxjs-page.scss',
})
export class RxjsPage implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  destroy$ = new Subject<void>(); // Nuestro subject que controla la destrucción

  // 1. retry: Reintenta la suscripción un número determinado de veces si ocurre un error.
  retryOperator() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      retry(2), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('retry:', res);
    });
  }

  // 2. map: Transforma cada valor emitido por el observable.
  mapOperator() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => posts.map(post => ({ id: post.id, title: post.title }))), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('map (solo id y titulo):', res);
    });
  }

  // 3. filter: Emite solo los valores que cumplen con la condición especificada.
  filterOperator() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      switchMap(posts => posts), // Aplanamos el array a emisiones individuales
      filter(post => post.id % 2 === 0), // Solo posts con ID par
      take(5), takeUntilDestroyed(this.destroyRef)
    ).subscribe((res) => {
      console.log('filter (posts con id par):', res);
    });
  }

  // 4. tap: Permite ejecutar efectos secundarios sin modificar el flujo de datos.
  tapOperator() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(res => console.log('tap (antes de suscribirse, loggeo extra):', res)), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('tap (data recibida):', res);
    });
  }

  // 5. switchMap: Cancela la petición anterior si hay una nueva (muy útil en buscadores).
  switchMapOperator() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/1').pipe(
      // Una vez tenemos el usuario, pedimos sus posts
      switchMap(user => this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('switchMap (posts del usuario 1):', res);
    });
  }

  // 6. mergeMap: Ejecuta suscripciones en paralelo sin importar el orden ni cancelar anteriores.
  mergeMapOperator() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      switchMap(users => users.slice(0, 3)), // Emitimos solo los primeros 3 usuarios individualmente
      mergeMap(user => this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('mergeMap (posts concurrentes de usuarios):', res);
    });
  }

  // 7. concatMap: Igual que mergeMap, pero ejecuta en orden secuencial una tras otra.
  concatMapOperator() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      switchMap(users => users.slice(0, 3)),
      concatMap(user => this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('concatMap (posts secuenciales de usuarios):', res);
    });
  }

  // 8. exhaustMap: Ignora las nuevas peticiones si la actual todavía no ha finalizado (muy útil para botones de envío/login).
  exhaustMapOperator() {
    of(1, 2, 3).pipe( // Simulamos 3 clicks muy rápidos
      exhaustMap(id => this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('exhaustMap (solo debería resolver la primera petición):', res);
    });
  }

  // 9. catchError: Captura un error en el flujo y permite devolver un observable alternativo (fallback).
  catchErrorOperator() {
    this.http.get('https://jsonplaceholder.typicode.com/url-invalida-para-causar-error').pipe(
      catchError(err => {
        console.error('catchError capturó:', err.status);
        return of([{ id: 0, title: 'Datos por defecto' }]); // Observable alternativo
      }), takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log('catchError resultado:', res);
    });
  }

  // 10. take: Permite recibir un número de emisiones y luego completa la suscripción automáticamente.
  takeOperator() {
    of('A', 'B', 'C', 'D', 'E').pipe(
      take(3),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((res) => {
      console.log('take (recibirá A, B, C):', res);
    });
  }

  // 11. takeUntil: Completa el observable cuando otro observable emite un valor.
  takeUntilOperator() {

    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => console.log('takeUntil (emite cada segundo hasta que el Subject le dice que pare):', res),
      complete: () => console.log('takeUntil: Efectivamente detenido.')
    });

    // Simulamos que a los 4 segundos destruimos la subscripción de manera reactiva
    setTimeout(() => {
      this.destroy$.next(); // Dispara la cancelación
      this.destroy$.complete(); // Buena práctica limpiarlo
    }, 4000);
  }

  // 12. debounceTime: Descarta emisiones que ocurren muy rápido. Solo emite cuando ha pasado un tiempo de silencio.
  debounceTimeOperator() {
    const subject = new Subject<string>();

    subject.pipe(
      debounceTime(1000) // Solo emitirá 1 segundo DESPUÉS de un tiempo de silencio absoluto
    ).subscribe((res) => {
      console.log('debounceTime (último valor emitido tras silencio de 1s):', res);
    });

    console.log('debounceTime: Simulando usuarios escribiendo muy rápido...');
    subject.next('A');
    setTimeout(() => subject.next('AB'), 250);
    setTimeout(() => subject.next('ABC'), 500);
    // Tras emitir 'ABC', habrá silencio. Un segundo después del último (1500ms total), la consola lo mostrará.
  }

  // 13. takeUntilDestroyed: Operador angular para matar la suscripción cuando se destruye el componente.
  takeUntilDestroyedOperator() {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef) // Se desuscribe automáticamente al salir de la página
    ).subscribe({
      next: (res) => console.log('takeUntilDestroyed (emite hasta destruir la página):', res),
      complete: () => console.log('takeUntilDestroyed: Componente destruido, suscripción terminada automáticamente.')
    });

    console.log('takeUntilDestroyed activo - Navega a otra ruta para ver si para.');
  }

  // 14. forkJoin: Espera a que todos los observables completen y luego emite un objeto/array con el último valor de cada uno.
  forkJoinOperator() {
    forkJoin({
      user: this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      posts: this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ user, posts }) => {
      console.log('forkJoin (ambas peticiones completaron concurrentemente):', user);
      console.log('forkJoin (ambas peticiones completaron concurrentemente):', posts);
    });
  }

  // 15. combineLatest: Combina múltiples observables para crear uno solo; emite cuando cualquiera emite, entregando los últimos valores de todos.
  combineLatestOperator() {
    combineLatest([
      this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([user, posts]) => {
      console.log('combineLatest (último valor combinado - user):', user);
      console.log('combineLatest (último valor combinado - posts):', posts);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
