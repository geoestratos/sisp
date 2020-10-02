var pipeData;

pipeData = [10, 20]

var pipe = {
    pipeDiameter: '20',
    drillDiameter: '26',
    startMd: '0',
    endMd: '0',
    startTvd: '0',
    endTvd: '0',
    programType: 'plan',
    connection: false,
}

var newPipe = {
        label: pipe.pipeDiameter,
        backgroundColor: "#D03C3E",
        stack: 'Stack 0',
        data: pipeData,
    }


export {newPipe}