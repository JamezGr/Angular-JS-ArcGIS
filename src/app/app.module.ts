import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EsriMapComponent } from "./esri-map/esri-map.component";
import { DefaultWidgetsComponent } from './defaultWidgets/default-widgets.component';
import { FilterWidgetComponent } from './filter-widget/filter-widget.component';

@NgModule({
  declarations: [AppComponent, EsriMapComponent, DefaultWidgetsComponent, FilterWidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
