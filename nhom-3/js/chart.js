window.onload = function () {

    //Better to construct options first and then pass it as a parameter
    a = [];
    for (i = 2; i < 8; i++){
        var ob = new Object();
        ob.x = i;
        ob.y = i+1;
        a.push(ob);
    }
    var options = {
        title: {
            text: ""
        },
        animationEnabled: true,
        exportEnabled: true,
        data: [
        {
            type: "spline", //change it to line, area, column, pie, etc
            dataPoints: a
        }
        ]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }