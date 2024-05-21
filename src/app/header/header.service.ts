import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  add(x: number, y: number) {
    return x + y;
  }
}