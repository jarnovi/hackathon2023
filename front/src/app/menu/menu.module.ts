import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '../material.module';
import { MenuListItemClickModule } from '../menu-list-item-click/menu-list-item-click.module';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuListItemClickModule,
  ]
})
export class MenuModule { }
