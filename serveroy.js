google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['1-hafta', 20, 28, 38, 45],
      ['2-hafta', 31, 38, 55, 66],
      ['3-hafta', 50, 55, 77, 80],
      ['4-hafta', 77, 77, 66, 50],
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('oylik'));

    chart.draw(data, options);
  }
