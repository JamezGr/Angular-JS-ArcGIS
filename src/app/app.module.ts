import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EsriMapComponent } from "./esri-map/esri-map.component";
import { DefaultWidgetsComponent } from './defaultWidgets/default-widgets.component';

@NgModule({
  declarations: [AppComponent, EsriMapComponent, DefaultWidgetsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
