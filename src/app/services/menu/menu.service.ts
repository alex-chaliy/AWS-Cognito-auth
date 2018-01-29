import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../models/menu-item/MenuItem';

@Injectable()
export class MenuService {

  constructor() { }

  public getItems(): Observable< MenuItem[] > {
    return new Observable( observer => {
      const items: MenuItem[] = [
        new MenuItem({ name: 'Register', url: 'register' }),
        new MenuItem({ name: 'Login', url: 'login' }),
        new MenuItem({ name: 'Profile', url: 'profile' }),
      ];
      observer.next( items );
    });
  }
}
