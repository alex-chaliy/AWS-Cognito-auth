import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { MenuItem } from '../../../models/menu-item/MenuItem';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  menuItems: MenuItem[];

  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit() {
    this._menuService.getItems()
      .subscribe( menuItems => this.menuItems = menuItems );
  }

}
