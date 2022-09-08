import React, { useEffect } from 'react';
// import './gauge.css';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { removeChartWatermark } from '../../utility/remove-chart-watermark';

am4core.useTheme(am4themes_animated);

function Gauge(props) {
//   const chart = useRef(null);
  useEffect(() => {
    const x = am4core.create('chartdiv', am4charts.GaugeChart);

    x.innerRadius = am4core.percent(80);

    x.paddingRight = 20;

    const axis = x.xAxes.push(new am4charts.ValueAxis());
    axis.min = 300;
    axis.max = 850;
    axis.opacity = 1;
    axis.strictMinMax = true;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.fill = '#fff';
    axis.renderer.labels.template.disabled = true;

    // Axis for ranges
    // const colorSet = new am4core.ColorSet();

    const range0 = axis.axisRanges.create();
    range0.value = 300;
    range0.endValue = 540;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = '#E12500';

    const range1 = axis.axisRanges.create();
    range1.value = 540;
    range1.endValue = 650;
    range1.label.text = 540;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = '#FF6A03';

    const range2 = axis.axisRanges.create();
    range2.value = 650;
    range2.endValue = 700;
    range2.label.text = 650;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = '#FDB966';

    const range3 = axis.axisRanges.create();
    range3.value = 700;
    range3.endValue = 750;
    range3.label.text = 700;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = '#85CB82';

    const range4 = axis.axisRanges.create();
    range4.value = 750;
    range4.label.text = 750;
    range4.endValue = 850;
    range4.axisFill.fillOpacity = 1;
    range4.axisFill.fill = '#61B238';

    // Main label
    const label = x.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 40;
    label.x = am4core.percent(50);
    label.y = am4core.percent(850);
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'bottom';
    label.text = '425';
    label.fill = '#fff';

    // Hand
    const hand = x.hands.push(new am4charts.ClockHand());
    hand.axis = axis;
    hand.innerRadius = am4core.percent(20);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = 425;

    hand.events.on('propertychanged', () => {
      // range0.endValue = ev.target.value;
      // range1.value = ev.target.value;
      // range2.value = ev.target.value;
      axis.invalidate();
    });

    setTimeout(() => {
      const value = Math.round(props.score || 0);
      label.text = value;
      const animation = new am4core.Animation(
        hand,
        {
          property: 'value',
          to: value,
        },
        1000,
        am4core.ease.cubicOut,
      ).start();
    }, 500);

    // Axis labels

    const label1 = x.radarContainer.createChild(am4core.Label);
    label1.isMeasured = false;
    label1.y = 10;
    label1.horizontalCenter = 'middle';
    label1.verticalCenter = 'top';
    label1.text = '850';
    label1.fill = '#fff';
    label1.adapter.add('x', (x, target) => (
      axis.renderer.pixelInnerRadius
        + ((axis.renderer.pixelRadius - axis.renderer.pixelInnerRadius) / 2)
    ));

    const label0 = x.radarContainer.createChild(am4core.Label);
    label0.isMeasured = false;
    label0.y = 10;
    label0.horizontalCenter = 'middle';
    label0.verticalCenter = 'top';
    label0.text = '300';
    label0.fill = '#fff';
    label0.adapter.add('x', (x, target) => -(
      axis.renderer.pixelInnerRadius
        + ((axis.renderer.pixelRadius - axis.renderer.pixelInnerRadius) / 2)
    ));

    // chart.current = x
    removeChartWatermark(x);
    return () => {
      x.dispose();
    };
  }, [props.score]);

  return <div id="chartdiv" style={{ width: '100%', height: '320px' }} />;
}
export default Gauge;
