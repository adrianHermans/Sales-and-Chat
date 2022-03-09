var colorsChartDark = {
    'letterChartDark': '#BFC9D4',
    'gridChartDark': '#181E37',
    'axisChartDark': '#6A7D8B',
    'letterSubTitle':'#888EA8'
}

function setCharts() {
    var options1 = {
        colors: ['#2196F3', '#E7515A'],
        series: [{
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000]
        }, {
            name: 'Expenses',
            data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000]
        }],
        chart: {
            fontFamily: 'Nunito, sans-serif',
            colors:colorsChartDark.letterChartDark,
            toolbar: {
                show: false
            },
            type: 'area',
            height: '80%',
            width: '100%',
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22
            },
            zoom:{
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        tooltip: {
            x: {
                show: false
            },
            theme: 'dark',
            marker: {
                show: true
            }
        },
        subtitle: {
            text: '$10,840',
            align: 'left',
            margin: 0,
            offsetX: 110,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '18px',
              color:  '#4361ee'
            }
          },
          title: {
            text: 'Total Profit',
            align: 'left',
            margin: 0,
            offsetX: 10,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '18px',
              color: colorsChartDark.letterSubTitle 
            },
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
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: colorsChartDark.letterChartDark
                }
            },
            tooltip: {
                theme: 'dark'
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
            labels: {
                style: {
                    colors: colorsChartDark.letterChartDark
                },
                formatter: function (value) {
                    return (value / 1000) + 'K'
                }
            }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
            offsetY: -90,
            fontSize: '16px',
            labels: {
                colors: colorsChartDark.letterChartDark
            }
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        
    }

    var chart = new ApexCharts(document.querySelector(".chart1"), options1);

    chart.render();

}