var colorsChartDark = {
    'letterChartDark':'#BFC9D4',
    'gridChartDark':'#181E37',
    'axisChartDark':'#6A7D8B'
}

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
            curve: 'smooth',
            width: 2
        },
        tooltip:{
            x:{
                show:false
            },
            theme:false
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
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            axisTicks:{
                show:false
            },
            labels:{
                style:{
                    colors: colorsChartDark.letterChartDark
                }
            },
            tooltip:{
                theme:'dark'
            }
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
            },
            labels:{
                style:{
                    colors: colorsChartDark.letterChartDark
                }
            }
        },
        grid: {
            borderColor: colorsChartDark.gridChartDark,
            strokeDashArray: 4,
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '16px',
            labels:{
                colors: colorsChartDark.letterChartDark
            }
        },
        fill: {
            type:'solid',
            opacity: 0.05
        }
    }

    var chart = new ApexCharts(document.querySelector(".chart1"), options1);

    chart.render();

}