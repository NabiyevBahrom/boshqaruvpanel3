google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Foyda',     11],
          ['Zarar',      2],
          ['Qaytarilgan',  2],
          ['sotib olingan', 2],
          ['Sotilgan',    7]
        ]);

        var options = {
          title: 'Oylik Hisobotlar',
          pieHole: 0.2,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }