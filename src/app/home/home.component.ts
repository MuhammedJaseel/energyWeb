import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  drowerPath = 'dashboard';

  ngOnInit(): void {
    const path = window.location.pathname.split('/')[2];
    if (path !== undefined) this.drowerPath = path;
  }

  drowerIcon = [
    { title: 'Dashboard', icon: '../', path: 'dashboard' },
    { title: 'OPS Monitor', icon: '../', path: 'ops' },
    { title: 'Report Center', icon: '../', path: 'report' },
    { title: 'Add Site', icon: '../', path: 'addSite' },
    { title: 'RSP Update', icon: '../', path: 'rsp' },
  ];
  onDrowerIconClick = (k: number) => {
    this.drowerPath = this.drowerIcon[k].path;
    window.history.replaceState('HOME', 'HOME', 'home/' + this.drowerPath);
  };
}
