import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { values2 } from './storage';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @Input() name: any;
  @Input() graphValue: any = 0;

  map: any;
  @ViewChild('dashboardMap') mapElement: any;
  lat = 43.879078;
  lng = -103.4615581;
  markers = [
    { lat: 22.33159, lng: 105.63233 },
    { lat: 7.92658, lng: -12.05228 },
    { lat: 48.75606, lng: -118.859 },
    { lat: 5.19334, lng: -67.03352 },
    { lat: 12.09407, lng: 26.31618 },
    { lat: 47.92393, lng: 78.58339 },
  ];
  constructor() {}

  perNumbers: any = [];
  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
    this.markers.forEach((location, i) => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map,
        icon: '../../../../assets/ic_marker.svg',
      });
    });
  }

  ngOnInit(): void {
    this.setSaleInventoryGraph();
    this.setProdectSale();
    for (let i = 0; i < 360; i++) this.perNumbers.push({ i, v: i > 300 });
  }

  // START line charg
  saleInventoryGraph: any = {
    titleVr: 'Volume (KL)',
    titileHr: 'Days',
    vrValues: [1, 100, 200, 300, 400],
    hrValues: [],
    graphs: [
      {
        data: [],
        color: '#86B6F3',
      },
    ],
  };

  setSaleInventoryGraph = () => {
    const totLength = values2.length;
    for (let i = 0; i < totLength; i++) {
      this.saleInventoryGraph.hrValues.push(i);
      if (i + 1 !== totLength) {
        const an = 100 / totLength / (values2[i].value - values2[i + 1].value);
        console.log(100 - (values2[i].value - values2[i + 1].value));

        this.saleInventoryGraph.graphs[0].data.push({
          angle: Math.atan(an),
          bottom: values2[i].value,
          left: (100 / totLength) * i,
        });
      }
    }
  };
  // END
  prodectSale: any = [
    {
      type: 1,
      title: 'Diesel',
      desc: '',
      time: 'Today',
      data: [
        { title: 'Mogas 95', color: '#F3C986', value: 200 },
        { title: 'Mogas 91', color: '#406CA5', value: 50 },
        { title: 'Diesel', color: '#86B6F3', value: 0 },
      ],
      angle: [],
    },
    {
      type: 1,
      title: 'Mogas 95',
      desc: '36',
      time: '23 06 2022 06:00',
      data: [
        { title: 'Mogas 95', color: '#F3C986', value: 45 },
        { title: 'Mogas 91', color: '#406CA5', value: 45 },
        { title: 'Diesel', color: '#86B6F3', value: 0 },
      ],
      angle: [],
    },
    {
      type: 1,
      title: '42',
      desc: 'Price Applied',
      time: '23 06 2022 06:00',
      data: [
        { title: 'Total RO', color: '#B2D3E1', value: 200 },
        { title: 'HOS Received', color: '#4087A5', value: 100 },
        { title: 'Price applied', color: '#67C2E8', value: 0 },
      ],
      angle: [],
    },
    {
      type: 2,
      title: '34',
      desc: 'RO Comm Today',
      time: '23 06 2022 06:00',
      data: [
        { title: 'RO Configured', color: '#97CBB3', value: 95 },
        { title: 'Communicated Today', color: '#4087A5', value: 40 },
        { title: 'Comm in last 1 Hour', color: '#67C2E8', value: 45 },
        { title: 'RO Tomporary Closed', color: '#B2D3E1', value: 10 },
        { title: 'RO Data Lagging', color: '#F3C986', value: 60 },
        { title: 'RO No Connectivity', color: '#F0534A', value: 0 },
      ],
      angle: [],
    },
  ];

  prodectSale_: any = [];

  setProdectSale = () => {
    for (let j = 0; j < this.prodectSale?.length; j++) {
      var color = this.prodectSale[j]?.data[0]?.color;
      for (let i = 0; i < 360; i += 0.5) {
        for (let k = 0; k < this.prodectSale[j]?.data?.length; k++)
          if (this.prodectSale[j]?.data[k]?.value === i)
            color = this.prodectSale[j]?.data[k + 1]?.color;
        this.prodectSale[j].angle.push({ value: i, color });
      }
    }
  };
}
