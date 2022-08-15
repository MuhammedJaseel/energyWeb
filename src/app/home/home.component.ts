import { Component, OnInit } from '@angular/core';
import { GraphComponent } from '../home-dashboard/graph/graph.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  drowerPath = 'dashboard';

  zoom = 12;
  // center= google.maps.LatLngLiteral
  options = {
    // mapTypeId: 'hybrid',
    // zoomControl: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: true,
    // maxZoom: 15,
    // minZoom: 8,
  };

  ngOnInit(): void {
    const path = window.location.pathname.split('/')[2];
    if (path !== undefined) this.drowerPath = path;
  }

  drowerIcon = [
    { title: 'Dashboard', icon: 'dashbord', path: 'dashboard' },
    { title: 'OPS Monitor', icon: 'ops', path: 'ops' },
    { title: 'Report Center', icon: 'report', path: 'report' },
    { title: 'Add Site', icon: 'addsite', path: 'addSite' },
    { title: 'RSP Update', icon: 'rsp', path: 'rsp' },
  ];
  onDrowerIconClick = (k: number) => {
    this.drowerPath = this.drowerIcon[k].path;
    window.history.replaceState('HOME', 'HOME', 'home/' + this.drowerPath);
  };
}
