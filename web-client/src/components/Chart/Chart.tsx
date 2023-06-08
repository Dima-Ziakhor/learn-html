import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from 'chart.js';
import type { ChartOptions } from 'chart.js';

import './Chart.scss';

Chart.register(
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement
);

export const ChartView = (): JSX.Element => {
  const [k, setK] = useState(1);

  const generateData = (): Array<{ x: number, y: number }> => {
    const data: Array<{ x: number, y: number }> = [];
    for (let x = 0; x <= 20; x += 0.1) {
      const y = Math.cos(x + k);
      data.push({ x, y });
    }
    return data;
  };

  const data = {
    datasets: [
      {
        label: 'y = cos(x + k)',
        data: generateData(),
        fill: false,
        borderColor: '#01c557',
        tension: 0.1
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  };

  return (
    <section className="chart">
      <div className="container">
        <div className="chart__wrapper">
          <h2 className="chart__title">
            Графік (<em>y = cos(x + K)</em>)
          </h2>

          <div className="chart__field">
            <h4 className="chart__field-title">
              Параметр K:
            </h4>

            <input
              type="number"
              className="chart__input"
              onInput={ (event) => { setK(Number(event.currentTarget.value)) } }
              value={ k }
              step={ 0.1 }
            />
          </div>

          <div className="chart__container">
            <Line
              id="chart"
              datasetIdKey="chart"
              data={ data }
              options={ options }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
