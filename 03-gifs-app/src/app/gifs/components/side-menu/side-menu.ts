import { Component } from '@angular/core';
import { SideMenuHeader } from '../side-menu-header/side-menu-header';
import { SideMenuOptions } from '../side-menu-options/side-menu-options';

@Component({
  imports: [SideMenuHeader, SideMenuOptions],
  selector: 'gifs-side-menu',
  templateUrl: './side-menu.html',
})
export class SideMenu { }
