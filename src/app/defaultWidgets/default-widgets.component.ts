import { Component, OnInit } from '@angular/core';
import { loadModules } from "esri-loader";

@Component({
  selector: 'app-default-widgets',
  templateUrl: './default-widgets.component.html',
  styleUrls: ['./default-widgets.component.scss']
})
export class DefaultWidgetsComponent implements OnInit {

  constructor() { }

  async initializeDefaultWidgets(view) {
    try {
      // import Widgets Here
      const [EsriCompass,
        EsriFullScreen,
        EsriHome,
        EsriLayerList,
        EsriLegend,
        EsriScaleBar,
        EsriSearch] = await loadModules([
        "esri/widgets/Compass",
        "esri/widgets/Fullscreen",
        "esri/widgets/Home",
        "esri/widgets/LayerList",
        "esri/widgets/Legend",
        "esri/widgets/ScaleBar",
        "esri/widgets/Search",
      ]);

      // add to Widgets List Here
      const [compass, fullscreen, home, layerlist, legend, scalebar, search ] = [
        new EsriCompass({ view: view }),
        new EsriFullScreen({ view: view }),
        new EsriHome({ view: view }),
        new EsriLayerList({ view: view }),
        new EsriLegend({ view: view }),
        new EsriScaleBar({ view: view }),
        new EsriSearch({ view: view})];

      // Widgets to Place on the Map
      // NB: For New Widgets, place in list you want to position in ie. top-right
      // NB: Place New Widget in the Order you want it to appear in
      const top_left = [fullscreen, home, compass];
      const top_right = [search, layerlist, legend];
      const bottom_left = [];
      const bottom_right = [scalebar];

      // Add UI Elements to Given Position
      top_left.forEach(function(widget){
        view.ui.add(widget, "top-left");
        console.log(widget._emitter.target.__proto__.declaredClass + " added");
      });

      top_right.forEach(function(widget){
        view.ui.add(widget, "top-right");
        console.log(widget._emitter.target.__proto__.declaredClass + " added");
      });

      bottom_right.forEach(function(widget){
        view.ui.add(widget, "bottom-right");
        console.log(widget._emitter.target.__proto__.declaredClass + " added");
      });

    } catch (error) {
      console.log("Could Not Add Widgets: ", error);
    }
  }

  ngOnInit() {
  }

}
