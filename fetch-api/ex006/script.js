function configureChart(xLables, yTemp) {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xLables,
      datasets: [
        {
          label: 'Zonal Annual Means - Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies in °C',
          data: yTemp,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            // Include a °C sign in the ticks
            callback: function (value, index, ticks) {
              return value + '°C';
            },
          },
        },
      },
    },
  });
}

async function getTemperatureData() {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  const tableData = data.split('\n').slice(1);
  const xLables = [];
  const yTemp = [];

  tableData.forEach(row => {
    const columns = row.split(',');
    xLables.push(columns[0]); // Year
    yTemp.push(parseFloat(columns[1]) + 14); // Temperature
  });
  configureChart(xLables, yTemp);
}
getTemperatureData();
