var connectorThinckness = -10
var canvasWidth = 800
$invisibleAuxConnector =  canvasWidth * .08


var barChartData = {
    labels: ['Programado', 'Real'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: "#D03C3E",
        barPercentage: 1.0,
        barThickness: 10,
        stack: 'Stack 0',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
        ]
    }, {
        label: '',
        backgroundColor: "rgba(0,0,0,0)",
        barPercentage: 1.0,
        barThickness: 10,
        
        stack: 'Stack 1',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),

        ]
    }, {
        label: 'Conectors', 
        backgroundColor: "#D03C3E",
        barPercentage: 1.0,
        barThickness: 10,
        stack: 'Stack 1',
        data: [
            connectorThinckness,
            connectorThinckness,

        ]
    },
    {
        label: 'Dataset 4',
        backgroundColor: "#D03C3E",
        barPercentage: 1.0,
        barThickness: 10,
        stack: 'Stack 2',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),

        ]
    },
    
    {
        label: 'Dataset 5',
        backgroundColor: "#D03C3E",
        barPercentage: 1.0,
        barThickness: 10,
        stack: 'Stack 3',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),

        ]
    }
    ]

};
window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'Estado mecanico'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};