import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment as env } from '../../environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private socket$: any;
  public batleStatisticsMessage = new Subject<string>();

  constructor() {}

  public connect(): void {
    this.socket$ = this.getNewWebSocket();
    this.socket$.subscribe({
      next: (message: any) => {
        this.batleStatisticsMessage.next(JSON.stringify(message));
      },
    });
  }

  private getNewWebSocket() {
    return webSocket({
      url: env.pokeStatisticsUrl,
      openObserver: {
        next: () => {
          console.log('Web socket connection ok');
        },
      },
      closeObserver: {
        next: () => {
          console.log('Socket connection closed');
          this.socket$ = undefined;
          this.connect(); 
        },
      },
    });
  }

  close() {
    this.socket$.complete();
  }
}
