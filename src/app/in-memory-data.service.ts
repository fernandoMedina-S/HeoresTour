import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Gold Experience', pts: 10 },
      { id: 12, name: 'Star Platinum', pts: 8 },
      { id: 13, name: 'Hermit Purple', pts: 4 },
      { id: 14, name: 'Tusk', pts: 9 },
      { id: 15, name: 'Stone Free', pts: 7 },
      { id: 16, name: 'Crazy Diamond', pts: 8 },
      { id: 17, name: 'Soft and Wet', pts: 7 },
      { id: 18, name: 'Killer Queen', pts: 7 },
      { id: 19, name: 'D4C', pts: 9 },
      { id: 20, name: 'Made In Heaven', pts: 10 }
    ];
    return {heroes};
  }

  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}