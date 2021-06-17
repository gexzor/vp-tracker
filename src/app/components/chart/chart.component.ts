import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GXPM } from 'src/app/shared/models/ChartData';
import { ChartUnit } from 'src/app/shared/models/ChartUnit';
// am4core.useTheme(am4themes_dark);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() public chartData = new Array<GXPM>();
  @Input() public unit: ChartUnit;
  @ViewChild('chartElement', { static: false })
  public chartElementRef: ElementRef<HTMLElement>;
  public matchData = new Array<any>();
  private chart: am4charts.XYChart;
  private subscriptions = new Array<Subscription>();

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.ready(() => {
        const chart = am4core.create(
          this.chartElementRef.nativeElement,
          am4charts.XYChart
        );
        chart.data = this.chartData;

        // X-axis
        const axisX = chart.xAxes.push(new am4charts.CategoryAxis());
        axisX.dataFields.category = 'minute';
        axisX.renderer.minGridDistance = 50;
        axisX.numberFormatter = new am4core.NumberFormatter();
        axisX.numberFormatter.numberFormat = '00.00';
        axisX.renderer.grid.template.opacity = 0;
        axisX.renderer.labels.template.fill = am4core.color('gray');

        // Y-axis
        const axisY = chart.yAxes.push(new am4charts.ValueAxis());
        // axisY.fillOpacity = 0.3;
        axisY.numberFormatter = new am4core.NumberFormatter();
        axisY.numberFormatter.numberFormat = '#.a';
        axisY.renderer.grid.template.stroke = am4core.color('white');
        axisY.renderer.labels.template.fill = am4core.color('gray');

        // Line graph
        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = 'minute';
        series.dataFields.valueY = 'value';
        series.name = this.capitalizeFirstLetter(
          `${this.unit} advantage at minute marker`
        );
        series.strokeWidth = 2;
        // Adapt the tooltip text to whether the Radiant or Dire has advantage
        series.adapter.add('tooltipText', (text, target): string => {
          const data = target.tooltipDataItem.dataContext as GXPM;
          // If negative value, then return Dire advantage and else Radiant
          return data.value < 0
            ? `Dire advantage at {categoryX} min: ${Math.abs(data.value)} ${
                this.unit
              }.`
            : `Radiant advantage at {categoryX} min: {valueY} ${this.unit}.`;
        });

        // Graph data points
        // const bullet = series.bullets.push(new am4charts.CircleBullet());
        // bullet.circle.strokeWidth = 0;
        // bullet.circle.radius = 1;
        // bullet.height = 1;

        chart.cursor = new am4charts.XYCursor();

        this.chart = chart;
      });
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  public capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
