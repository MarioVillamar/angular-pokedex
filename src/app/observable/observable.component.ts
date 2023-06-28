import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  obs = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1');
    }, 1000);

    setTimeout(() => {
      observer.next('2');
    }, 2000);

    setTimeout(() => {
      observer.next('3');
    }, 3000);
    
    setTimeout(() => {
      observer.error('Error en el stream de datos');
    }, 4000);

    setTimeout(() => {
      observer.next('5');
    }, 5000);

    setTimeout(() => {
      observer.complete();
    }, 5000);



  });

  subscriber: Subscription;

  ngOnInit(): void {
    this.subscriber = this.obs.subscribe({
      next: (valor) => console.log('Observador cosiguio el siguiente valor: ' + valor),
      error: (error) => console.log('Observador obtuvo un error: ' + error),
      complete: () => console.log('Observador termino de observar')
    }
    );
    console.log('Despues de la suscripcion');
  }

  ngOnDestroy(): void {
    if(this.subscriber){
      this.subscriber.unsubscribe();
    }
  }

}
