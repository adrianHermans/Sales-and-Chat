function setCharts() {
    var options1 = {
        colors: ['#2196F3', '#E7515A'],
        series: [{
            name: 'Income',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Expenses',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            toolbar: {
                show: false
            },
            type: 'area',
            height: '80%',
            width: '100%'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            lines: {
                show: false
            },
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            lines: {
                show: false
            },
            axisBorder: {
                show: false
            },
            crosshairs: {
                show: true
            }
        },
        grid: {
            borderColor: '#fff',
            strokeDashArray: 7,
            show: true,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    }

    var chart = new ApexCharts(document.querySelector(".chart1"), options1);

    chart.render();

}