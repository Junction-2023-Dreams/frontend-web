import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CanvasJS, CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";

@Component({
  selector: 'app-chart-patient-page',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, CanvasJSAngularChartsModule],
  templateUrl: './chart-patient-page.component.html',
  styleUrl: './chart-patient-page.component.css'
})
export class ChartPatientPageComponent {
  chart: any;

  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    title:{
      text: "Heartrate History"
    },
    axisX:{
      valueFormatString: "D MMM"
    },
    axisY: {
      title: "BPM"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: "line",
      showInLegend: true,
      name: "Your Heartrate",
      xValueFormatString: "MMM DD, YYYY",
      dataPoints: [
        { x: new Date(2021, 8, 1), y: 63 },
        { x: new Date(2021, 8, 2), y: 69 },
        { x: new Date(2021, 8, 3), y: 65 },
        { x: new Date(2021, 8, 4), y: 70 },
        { x: new Date(2021, 8, 5), y: 71 },
        { x: new Date(2021, 8, 6), y: 65 },
        { x: new Date(2021, 8, 7), y: 73 },
        { x: new Date(2021, 8, 8), y: 123 },
        { x: new Date(2021, 8, 9), y: 134 },
        { x: new Date(2021, 8, 10), y: 75 },
        { x: new Date(2021, 8, 11), y: 76 },
        { x: new Date(2021, 8, 12), y: 84 },
        { x: new Date(2021, 8, 13), y: 87 },
        { x: new Date(2021, 8, 14), y: 76 },
        { x: new Date(2021, 8, 15), y: 79 },
        { x: new Date(2021, 8, 16), y: 142 },
        { x: new Date(2021, 8, 17), y: 144 },
        { x: new Date(2021, 8, 18), y: 86 },
        { x: new Date(2021, 8, 19), y: 74 },
        { x: new Date(2021, 8, 20), y: 142 },
        { x: new Date(2021, 8, 21), y: 144 },
        { x: new Date(2021, 8, 22), y: 87 },
        { x: new Date(2021, 8, 23), y: 76 },
      ]
    },{}]
  }
  selected = "option1";
}
