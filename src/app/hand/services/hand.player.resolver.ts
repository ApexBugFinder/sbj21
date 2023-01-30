import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { HandService } from './hand.service';
import { Hand } from '../models/hand';
import { Observable, map, timeout } from 'rxjs';

@Injectable()
export class PlayerHandResolver implements Resolve<Hand> {
  constructor(private ms: HandService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<Hand> {
    let id = route.params['player_hand_id'];

    return this.ms.getHandById(id).pipe(timeout(5000),map((data:Hand) => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/welcome']);
        return null;
      }
    }));
  }
}
