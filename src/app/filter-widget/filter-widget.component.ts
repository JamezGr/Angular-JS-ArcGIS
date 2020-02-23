import { Component,
         ElementRef,
         OnInit,
         AfterViewInit,
         ViewChild } from '@angular/core';

import { EsriMapComponent } from "../esri-map/esri-map.component";

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss']
})
export class FilterWidgetComponent implements OnInit {

  @ViewChild("filter") filterWidget: ElementRef;


  constructor() {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
