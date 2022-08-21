import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerServices {
  log(name: string) {
    console.log('hello world' + name);
  }
}
