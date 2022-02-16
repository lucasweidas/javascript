async function getTemperatureData() {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  const rows = data.split('\n');
  const tableHeaders = rows.splice(0, 1).join('').split(',');

  configureTableData(tableHeaders, rows);
}
getTemperatureData();

function configureTableData(headers, datas) {
  const thead = document.querySelector('thead');
  const tbody = document.querySelector('tbody');

  thead.appendChild(
    headers.reduce((trow, header) => {
      const th = document.createElement('th');
      th.innerText = header;
      trow.appendChild(th);
      return trow;
    }, document.createElement('tr'))
  );

  datas.forEach(data =>
    tbody.appendChild(
      data.split(',').reduce((trow, rowData) => {
        const td = document.createElement('td');
        td.innerText = rowData;
        trow.appendChild(td);
        return trow;
      }, document.createElement('tr'))
    )
  );
}
