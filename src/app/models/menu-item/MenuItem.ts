import { IMenuItem } from "./IMenuItem";

export class MenuItem implements IMenuItem {
  name: string;
  url: string;

  constructor( o: IMenuItem = <IMenuItem>{} ) {
    this.name = o.name || '';
    this.url = o.url || '';
  }
}