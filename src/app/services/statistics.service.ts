import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment as env } from '../../environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private socket: any;
  public batleStatisticsMessage = new Subject<string>();

  constructor() {}

  public connect(): void {
    this.socket = this.getNewWebSocket();
    this.socket.subscribe({
      next: (message: any) => {
        this.batleStatisticsMessage.next(JSON.stringify(message));
      },
    });
  }

  private getNewWebSocket() {
    return webSocket(env.pokeStatisticsUrl);
  }

  close(){
    this.socket.complete();
  }
}
