import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  imports: [RouterOutlet, SideMenu],
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
