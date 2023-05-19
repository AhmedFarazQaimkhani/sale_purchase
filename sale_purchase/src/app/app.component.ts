import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

interface Data {
  text: string;
  icon: string;
}
interface Item {
  data?: Data;
  path: string;
  selected?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public expanded = true;
  public items: Array<Item> = [];

  constructor(private router: Router) {
    this.items = this.mapItems(router.config as Item[]);
    this.items[0].selected = true;
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: Item[]): Item[] {
    return routes.map((item: Item) => {
      return {
        text: item.data ? item.data.text : '',
        icon: item.data ? item.data.icon : '',
        path: item.path ? item.path : '',
      };
    });
  }
}
